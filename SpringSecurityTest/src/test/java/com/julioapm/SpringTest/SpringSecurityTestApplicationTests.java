package com.julioapm.SpringTest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SpringSecurityTestApplicationTests {

	@Autowired
	private MockMvc mockMvc;
	
	@Test
	void getAlo4WhenNotAuthenticatedThenUnauthorized() throws Exception {
		this.mockMvc.perform(get("/alo4"))
			.andExpect(status().isUnauthorized());
	}
	
	//Observe que o usuário é um mock e, portanto, não precisa existir
	@Test
	@WithMockUser(username = "Teste", password = "senha", roles = {"USER"})
	void getAlo4WhenAuthenticatedWithMockUserNotAuthorizedThenForbidden() throws Exception {
		this.mockMvc.perform(get("/alo4"))
			.andExpect(status().isForbidden());
	}

	//Aqui o teste utiliza o Bean UserDetailsService configurado em SecurityConfiguration.java
	@Test
	@WithUserDetails("admin")
	void getAlo4WhenAuthenticatedWithUserDetailsThenOk() throws Exception {
		this.mockMvc.perform(get("/alo4"))
			.andExpect(status().isOk())
			.andExpect(content().string("Hello, admin"));
	}
}
