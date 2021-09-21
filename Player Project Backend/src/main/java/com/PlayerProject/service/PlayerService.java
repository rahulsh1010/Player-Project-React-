package com.PlayerProject.service;

import java.util.List;

import com.CustomException.InvalidPlayerException;
import com.PlayerProject.domain.Player;

public interface PlayerService {

	public String save(Player player) throws InvalidPlayerException;
	public List<Player> getALLPlayers(); 
	public String deletePlayer(int id);
	public Player updatePlayer(Player player) throws InvalidPlayerException;
}
