import { Component } from '@angular/core';
import { Residence } from 'src/core/models/Residence';
import { Apartment } from 'src/core/models/Appartement';
@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg"}
    ];  
    
    selectedResidence: Residence | null = null; // Variable to store the selected residence
    showApartments(residence: Residence): void {
      this.selectedResidence = residence;
    }
  
    listApartments: Apartment[] = [
      { id: 1, appartNum: 1, floorNum: 0, surface: 100, terrace: "oui", surfaceTerrace: 20, category: "S+1", description: "Appartement S+1", residence: this.listResidences[0] },
      { id: 2, appartNum: 2, floorNum: 0, surface: 130, terrace: "non", surfaceTerrace: 0, category: "S+2", description: "Appartement S+2", residence: this.listResidences[0] },
      { id: 3, appartNum: 3, floorNum: 0, surface: 150, terrace: "oui", surfaceTerrace: 30, category: "S+3", description: "Appartement S+3", residence: this.listResidences[1] }
    ];
 
    // Method to get apartments filtered by residence
    getApartmentsByResidence(residence: Residence): Apartment[] {
      return this.listApartments.filter(apartment => apartment.residence.id === residence.id);
    }
    
}