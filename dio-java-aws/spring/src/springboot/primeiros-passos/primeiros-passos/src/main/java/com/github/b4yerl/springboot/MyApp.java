package com.github.b4yerl.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MyApp implements CommandLineRunner {
    @Autowired
    private Calc calc;
    @Autowired
    private InputHandler inputHandler;
    @Autowired
    private AgendaContatos agendaContatos;
    @Autowired
    private ApplicationContext context;

    @Override
    public void run(String... args) throws Exception {
        int soma = calc.somar(Integer.parseInt(inputHandler.getUserInput()), 5);
        System.out.println(soma);

        System.out.println("Insira a quantidade contatos a serem registrados");
        int quantidadeDeContatos = Integer.parseInt(inputHandler.getUserInput());
        System.out.println("Coletando informações para " + quantidadeDeContatos + " contatos:");
        for(int i = 0; i < quantidadeDeContatos; i++) {
            System.out.print("Nome: ");
            String nome = inputHandler.getUserInput();
            System.out.print("Email: ");
            String email = inputHandler.getUserInput();

            Contato contato = context.getBean(Contato.class);
            contato.setNome(nome);
            contato.setEmail(email);
            agendaContatos.addContato(contato);
        }

        System.out.println(agendaContatos.getContatos());
    }
}
