const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader")


describe("Unit tests for ExplorerService class",()=>{

    test("1) Filter explorers by mission, get amount and usernames ",()=>{

        //Código que se usa en la app
        const explorers = Reader.readJsonFile("explorers.json"); 

        const explorersByMission = ExplorerService.filterByMission(explorers, "node");
        const amountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        const usernamesOfExplorersByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        
        expect(explorersByMission[0].mission).toBe("node")
        expect(amountOfExplorersByMission).toBe(10)
        expect(usernamesOfExplorersByMission[0]).toBe("ajolonauta1")
        
    })

})