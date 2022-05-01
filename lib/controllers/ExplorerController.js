const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController{

    static getExplorersByMission(mission){

        const explorers = Reader.readJsonFile("explorers.json");
        //console.log("Desde explorercontroller\n"+explorers)

        return ExplorerService.filterByMission(explorers,mission) 
        //console.log("filtrados\n"+filteredByMission)
    }

    static getExplorersUsernamesByMission(mission){

        const explorers = Reader.readJsonFile("explorers.json");

        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        // const uno = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        // console.log("Desde explorercontroller\n"+uno)

    }

    static getExplorersAmonutByMission(mission){

        const explorers = Reader.readJsonFile("explorers.json");

        return ExplorerService.getAmountOfExplorersByMission(explorers,mission)
        // const dos = ExplorerService.getAmountOfExplorersByMission(explorers,mission)
        // console.log("Cantidad\n"+dos)

    }


    static getValidationScore(score){
        const fizzbuzzValue = FizzbuzzService.applyValidationInNumber(score);

        return fizzbuzzValue;
    }


}

//ExplorerController.getExplorersAmonutByMission("node");

module.exports = ExplorerController

