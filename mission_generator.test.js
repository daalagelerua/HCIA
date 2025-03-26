const { Agency, Agent, Objective, Surveillance, Elimination, Exfiltration } = require('./mission_generator');

test('Instantiate Agency class with correct attributes', () => {
    const agency = new Agency("Test Agency");
    expect(agency.name).toBe("Test Agency");
    expect(agency.agentList).toEqual([]);
});

test('Instantiate Agent class with correct attributes', () => {
    const agent = new Agent("Test Agent", "001");
    expect(agent.name).toBe("Test Agent");
    expect(agent.id).toBe("001");
    expect(agent.objectives).toEqual([]);
});

test('Instantiate Objective class with correct attributes', () => {
    const objective = new Objective("Test Objective");
    expect(objective.description).toBe("Test Objective");
});

test('Instantiate Surveillance class with correct attributes', () => {
    const surveillance = new Surveillance("Follow the target", "Test Target");
    expect(surveillance.description).toBe("Follow the target");
    expect(surveillance.target).toBe("Test Target");
});

test('Instantiate Elimination class with correct attributes', () => {
    const elimination = new Elimination("Neutralize the threat", "Test Target");
    expect(elimination.description).toBe("Neutralize the threat");
    expect(elimination.target).toBe("Test Target");
});

test('Instantiate Exfiltration class with correct attributes', () => {
    const exfiltration = new Exfiltration("Extract the agent", "Test Location");
    expect(exfiltration.description).toBe("Extract the agent");
    expect(exfiltration.location).toBe("Test Location");
});

test('Add an agent to the agency and check agent list', () => {
    const agency = new Agency("Test Agency");
    const agent = new Agent("Test Agent", "001");
    agency.addAgent(agent);
    expect(agency.agentList.length).toBe(1);
    expect(agency.agentList[0]).toBe(agent);
});

test('Assign an objective to an agent and check objectives list', () => {
    const agent = new Agent("Test Agent", "001");
    const objective = new Objective("Test Objective");
    agent.assignObjective(objective);
    expect(agent.objectives.length).toBe(1);
    expect(agent.objectives[0]).toBe(objective);
});

test('Check Surveillance', () => {
    const surveillance = new Surveillance("Follow the target", "Test Target");
    expect(surveillance instanceof Objective).toBe(true);
});

test('Check Elimination', () => {
    const elimination = new Elimination("Neutralize the threat", "Test Target");
    expect(elimination instanceof Objective).toBe(true);
});

test('Check Exfiltration', () => {
    const exfiltration = new Exfiltration("Extract the agent", "Test Location");
    expect(exfiltration instanceof Objective).toBe(true);
});
