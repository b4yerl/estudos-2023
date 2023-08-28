package com.github.b4yerl.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AgendaContatos {
    @Autowired
    private List<Contato> contatos;

    public List<Contato> getContatos() {
        return contatos;
    }

    public void addContato(Contato c) {
        contatos.add(c);
    }
}
