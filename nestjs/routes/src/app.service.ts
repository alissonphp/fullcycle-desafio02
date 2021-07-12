import { Injectable } from '@nestjs/common';
import { Route } from './entities/route';

@Injectable()
export class AppService {
  getRoutes(): Route[] {
    return [
      {
        title: "Route from Job to the Hospital",
        startPosition: {
          lati: "-2.5171551",
          long: "-44.2453204",
        },
        endPosition: {
          lati: "-2.5171551",
          long: "-44.2453204",
        }
      },
      {
        title: "Route from Job to the Mall",
        startPosition: {
          lati: "-2.5171531",
          long: "-44.2453121",
        },
        endPosition: {
          lati: "-2.51712551",
          long: "-44.24512304",
        }
      },
      {
        title: "Route from the Job to the Gym",
        startPosition: {
          lati: "-2.5171551",
          long: "-44.2453204",
        },
        endPosition: {
          lati: "-2.209122",
          long: "-44.91236761",
        }
      },
      {
        title: "Route from the Job to the Supermarket",
        startPosition: {
          lati: "-2.5171551",
          long: "-44.2453204",
        },
        endPosition: {
          lati: "-2.12937871",
          long: "-44.129837612",
        }
      },
    ]
  }
}
