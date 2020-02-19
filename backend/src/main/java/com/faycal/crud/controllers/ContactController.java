package com.faycal.crud.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.faycal.crud.models.Contact;
import com.faycal.crud.repositories.ContactRepository;

@RestController("/")
@CrossOrigin("http://localhost:3000")
public class ContactController {
	@Autowired
	ContactRepository repository;

	@RequestMapping(method = RequestMethod.GET, value = "/contacts")
	public Iterable<Contact> getAll() {
		return repository.findAll();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/contacts/{id}")
	public Optional<Contact> show(@PathVariable String id) {
		return Optional.ofNullable(repository.findById(id))
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/contacts/{id}")
	public Contact update(@PathVariable String id, @RequestBody Contact contact) {
		Contact foundCon = repository.findById(id).get();
		foundCon.setAddress(contact.getAddress());
		foundCon.setName(contact.getName());
		foundCon.setCity(contact.getCity());
		foundCon.setEmail(contact.getEmail());
		foundCon.setPhone(contact.getPhone());
		return repository.save(foundCon);
	}

	@RequestMapping(method = RequestMethod.PATCH, value = "/contacts/{id}", consumes = "application/json")
	public Contact updatePartial(@PathVariable String id, @RequestBody String contact) {
		Contact foundCon = repository.findById(id).get();
		foundCon.setAddress(contact);
		return repository.save(foundCon);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/contacts")
	public Contact create(@RequestBody Contact contact) {
		return repository.save(contact);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/contacts/{id}")
	public String delete(@PathVariable String id) {
		Contact c = Optional.ofNullable(repository.findById(id))
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND)).get();
		repository.delete(c);
		return "deleted";
	}
}
