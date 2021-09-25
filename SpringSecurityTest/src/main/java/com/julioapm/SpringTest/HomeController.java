package com.julioapm.SpringTest;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@RequestMapping("/alo1")
	public @ResponseBody String greeting1() {
		SecurityContext context = SecurityContextHolder.getContext();
		Authentication authentication = context.getAuthentication();
		String username = authentication.getName();
		return "Hello, " + username;
	}
	
	@RequestMapping("/alo2")
	public @ResponseBody String greeting2(@CurrentSecurityContext SecurityContext context) {
		Authentication authentication = context.getAuthentication();
		String username = authentication.getName();
		return "Hello, " + username;
	}
	
	@RequestMapping("/alo3")
	public @ResponseBody String greeting3(@CurrentSecurityContext SecurityContext context) {
		Authentication authentication = context.getAuthentication();
		UserDetails user = (UserDetails) authentication.getPrincipal();
		return "Hello, " + user.getUsername();
	}
	
	@RequestMapping("/alo4")
	@PreAuthorize("hasRole('ADMIN')")
	public @ResponseBody String greeting4(@AuthenticationPrincipal UserDetails user) {
		return "Hello, " + user.getUsername();
	}
}
