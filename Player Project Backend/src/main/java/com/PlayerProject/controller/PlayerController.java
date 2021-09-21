package com.PlayerProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CustomException.InvalidPlayerException;
import com.PlayerProject.domain.Player;
import com.PlayerProject.service.PlayerService;
import com.fasterxml.jackson.databind.exc.InvalidFormatException;


@CrossOrigin("http://localhost:3000")
@RestController
public class PlayerController {
	
	@Autowired
	private PlayerService playerservice;
	
	@PostMapping("/upload")
	public String save(@RequestBody Player player)
	{
		try {
			return playerservice.save(player);
		} catch (InvalidPlayerException e) {
			return e.getMessage();
		}
		
	}
	
	@GetMapping("/getplayers")
	public List<Player> get(){
		return playerservice.getALLPlayers();
	}
	
	@PostMapping("/delete/{id}")
	public String deletebyId(@PathVariable int id) {
		return playerservice.deletePlayer(id);
	}
	
	@PostMapping("/update")
	public String update(@RequestBody Player player)  {
		try {
			playerservice.updatePlayer(player);
			return "Player Updated";
		} catch (InvalidPlayerException e) {
			return e.getMessage();
		}
	}


}
