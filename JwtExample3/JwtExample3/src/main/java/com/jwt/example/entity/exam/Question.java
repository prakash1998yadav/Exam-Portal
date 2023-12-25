package com.jwt.example.entity.exam;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="question")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long quesId;
	@Column(length = 5000)
	private String content;
	private String image;
	@Column(length = 1000)
	private String option1;
	@Column(length = 1000)
	private String option2;
	@Column(length = 1000)
	private String option3;
	@Column(length = 1000)
	private String option4;
	@Column(length = 1000)
	private String answer;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade =CascadeType.MERGE)
	private Quiz quiz;
	

}
