package com.PlayerProject.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.PlayerProject.domain.Player;

public interface PlayerDAO extends JpaRepository<Player,Integer>{

}
