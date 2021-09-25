package com.julioapm.SpringTest;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;

//Este teste é um teste de integração
//O servidor é iniciado e receberá requisições HTTP "reais"
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class SpringSecurityTestApplicationIntegrationTests {
	@LocalServerPort
	private int port;
	
	@Autowired
	private TestRestTemplate rest;
	
	@Test
	void getAlo4WhenNotAuthenticatedThenUnauthorized() {
		HttpStatus status = rest.getForEntity("/alo4", String.class).getStatusCode();
		assertThat(status).isEqualTo(HttpStatus.UNAUTHORIZED);
	}

	@Test
	void getAlo4WhenAuthenticatedNotAuthorizedThenForbidden() {
		HttpStatus status = rest.withBasicAuth("user", "password").getForEntity("/alo4", String.class).getStatusCode();
		assertThat(status).isEqualTo(HttpStatus.FORBIDDEN);
	}
	
	@Test
	void getAlo4WhenAuthenticatedThenOk() {
		String result = rest.withBasicAuth("admin", "password").getForObject("/alo4", String.class);
		assertThat(result).isEqualTo("Hello, admin");
	}
}
