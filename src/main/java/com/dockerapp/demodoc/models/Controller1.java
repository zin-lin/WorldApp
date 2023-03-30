package com.dockerapp.demodoc.models;

import com.dockerapp.demodoc.SQLConnection;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controller1 {


    @GetMapping("/wPopulation")
    public String getPopulation(){
        SQLConnection sqlConnection = new SQLConnection();
        String ans;
        try {
            sqlConnection.connect("localhost:3001", 0);
            PopulationReport report = sqlConnection.getWorldPopulation();
            ans = report.getPopulation()+"";
            sqlConnection.disconnect();
        }catch(Exception e)
        {
            ans = "Error: " + e.getMessage();
        }
        return ans;
    }

    @GetMapping("/cPopulation/{id}")
    public String getPopulationOfCity(@PathVariable String id){
        SQLConnection sqlConnection = new SQLConnection();
        String ans;
        try {
            sqlConnection.connect("localhost:3001", 0);
            PopulationReport report = sqlConnection.getPopulationOfCityID(id);
            ans = report.getPopulation()+"";
            sqlConnection.disconnect();
        }catch(Exception e)
        {
            ans = "Error: " + e.getMessage();
        }
        return ans;
    }

    @GetMapping("/dPopulation/{name}")
    public String getPopulationDistrict(@PathVariable String name){
        SQLConnection sqlConnection = new SQLConnection();
        String ans;
        try {
            sqlConnection.connect("localhost:3001", 0);
            PopulationReport report = sqlConnection.getPopulationOfDistrict(name);
            ans = report.getPopulation()+"";
            sqlConnection.disconnect();
        }catch(Exception e)
        {
            ans = "Error: " + e.getMessage();
        }
        return ans;
    }

    @GetMapping("/rPopulation/{name}")
    public String getPopulationRegion(@PathVariable String name){
        SQLConnection sqlConnection = new SQLConnection();
        String ans;
        try {
            sqlConnection.connect("localhost:3001", 0);
            PopulationReport report = sqlConnection.getPopulationOfRegion(name);
            ans = report.getPopulation()+"";
            sqlConnection.disconnect();
        }catch(Exception e)
        {
            ans = "Error: " + e.getMessage();
        }
        return ans;
    }


    @GetMapping("/ctryPopulation/{code}")
    public String getPopulationCountry(@PathVariable String code){
        SQLConnection sqlConnection = new SQLConnection();
        String ans;
        try {
            sqlConnection.connect("localhost:3001", 0);
            PopulationReport report = sqlConnection.getPopulationOfCountry(code);
            ans = report.getPopulation()+"";
            sqlConnection.disconnect();
        }catch(Exception e)
        {
            ans = "Error: " + e.getMessage();
        }
        return ans;
    }


    @GetMapping("/contPopulation/{name}")
    public String getPopulationContinent(@PathVariable String name){
        SQLConnection sqlConnection = new SQLConnection();
        String ans;
        try {
            sqlConnection.connect("localhost:3001", 0);
            PopulationReport report = sqlConnection.getPopulationOfContinent(name);
            ans = report.getPopulation()+"";
            sqlConnection.disconnect();
        }catch(Exception e)
        {
            ans = "Error: " + e.getMessage();
        }
        return ans;
    }

}
