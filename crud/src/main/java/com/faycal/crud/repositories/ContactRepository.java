package com.faycal.crud.repositories;

import org.springframework.data.repository.CrudRepository;

import com.faycal.crud.models.Contact;

public interface ContactRepository extends CrudRepository<Contact, String> {

}
