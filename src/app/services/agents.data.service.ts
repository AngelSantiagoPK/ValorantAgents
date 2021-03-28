import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AbilitiesDataService } from './abilities.data.service';
@Injectable({ providedIn: 'root' })
export class AgentsDataService {
  constructor(
    private http: HttpClient,
    private abilities: AbilitiesDataService
  ) {}
  get() {
    const agents = [];
    const jwt = 'keyLErtb18ckdPhpm';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
    });
    /**
     * this get request first gets all the available agents
     * then it gets the abilities that all of the agents has
     * one-by-one. then it gets all of those individual abilities
     * and it maps them to the agents.
     * the result is that for every agent that responds with "Abilities" ids
     * there is a full Ability in that place in the end.
     */
    return (
      this.http
        /**
         * 1. get all agents
         */
        .get(
          'https://api.airtable.com/v0/appXOr8BTWFINNzZL/Agents?maxRecords=15&view=Grid%20view',
          { headers }
        )
        .pipe(
          switchMap((response: any) => {
            /**
             * store a retrievable records to all agents
             */
            agents.push(...response.records);
            /**
             * store all of the abilityIds in an array
             *   flatMap works to flatten and map the "Abilities" arrays into a single array
             *   filter ensures that all of the fields are actually valid ids, not undefined
             */
            const abilityIds = agents
              .flatMap((agent) => agent.fields.Abilities)
              .filter((ability) => !!ability);
            /**
             * all of the abilityIds are mapped to http requests
             * then forkJoin operator works to make all of the http requests and return
             * them in a single array of abilities
             */
            return forkJoin(abilityIds.map((id) => this.abilities.getOne(id)));
          }),
          map((abilities: any) => {
            /**
             * finalAgents is where the original agents request is modified to have the full abiltiies.
             *
             * hasAbilities is a check to prevent errors for Agents who do not have abilities.
             * When an Agent has no abilities they get an empty array.
             *
             * when an agent has abilities their Abilities start off as an array of ids.
             * the ids are mapped to full abilities using the "abilities.find" method.
             *
             * when the original id of the original Ability matches an id in the array of
             * fully populated abilities find returns the full ability
             */
            const finalAgents = agents.map((agent) => {
              const hasAbilities = agent.fields.Abilities;
              return {
                ...agent,
                fields: {
                  ...agent.fields,
                  Abilities: hasAbilities
                    ? agent.fields.Abilities.map((id) =>
                        abilities.find((ability) => ability.id === id)
                      )
                    : [],
                },
              };
            });
            /**
             * return the final array of agents
             */
            return finalAgents;
          })
        )
    );
  }
}
