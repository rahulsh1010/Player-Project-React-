package com.PlayerProject.serviceImpl;

import java.util.List;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CustomException.InvalidPlayerException;
import com.PlayerProject.domain.Player;
import com.PlayerProject.repository.PlayerDAO;
import com.PlayerProject.service.PlayerService;

@Service
public class PlayerServiceImpl implements PlayerService {
	
	@Autowired
	private PlayerDAO playerDAO;
	
	@Override
	public String save(Player player) throws InvalidPlayerException {
		
		if(player.getName()=="") {
			throw new InvalidPlayerException("Please enter player name.");
		}
		else if(player.getAge()==0) {
//			logger.error("Please enter the player nationality");
			throw new InvalidPlayerException("Please enter player age.");
		}
		else if(player.getNoOfTournaments()==0) {
//			logger.error("Please enter the player nationality");
			throw new InvalidPlayerException("Please enter number of tournaments.");
		}
		else if(!((Pattern.compile ("^[ A-Za-z]+$")).matcher(player.getName())).matches()) {
//			logger.error("Name can contain character only "+speaker.getsName());
			throw new InvalidPlayerException("Name can contain characters only.");
		}
		else if(player.getNationality()=="") {
//			logger.error("Please enter the player nationality");
			throw new InvalidPlayerException("Please enter player nationality.");
		}
		else if(!((Pattern.compile ("^[ A-Za-z]+$")).matcher(player.getNationality())).matches())
			throw new InvalidPlayerException("nationality only contains chatacters.");
		playerDAO.save(player);
		return "player saved";
	}

	@Override
	public List<Player> getALLPlayers() {
		return playerDAO.findAll();
	}

	@Override
	public String deletePlayer(int id) {
		playerDAO.deleteById(id);
		return "player deleted";
	}

	@Override
	public Player updatePlayer(Player player) throws InvalidPlayerException {
		if(!playerDAO.existsById(player.getId()))
			throw new InvalidPlayerException("Please Select Player Id.");
		else 
		 
			if(player.getName()=="") {
				throw new InvalidPlayerException("Please enter player name!!!");
			}
			else if(!((Pattern.compile ("^[ A-Za-z]+$")).matcher(player.getName())).matches()) {
//				logger.error("Name can contain character only "+speaker.getsName());
				throw new InvalidPlayerException("Name can contain characters only!!!");
			}
			else if(player.getNationality()=="") {
//				logger.error("Please enter the player nationality");
				throw new InvalidPlayerException("Please enter player nationality");
			}
			else if(!((Pattern.compile ("^[ A-Za-z]+$")).matcher(player.getNationality())).matches())
				throw new InvalidPlayerException("nationality only contains chatacters");
			else if(player.getAge()==0) {
//				logger.error("Please enter the player nationality");
				throw new InvalidPlayerException("Please enter player age.");
			}
			else if(player.getNoOfTournaments()==0) {
//				logger.error("Please enter the player nationality");
				throw new InvalidPlayerException("Please enter number of tournaments.");
			}
			return playerDAO.save(player);
		
	}
	
	
	

}
