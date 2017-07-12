import { Injectable } from '@angular/core';
import { Work } from './work';
import { School } from './school';
import { MobileApp } from './mobile-app';
import { Hack } from './hack';
import { WORK } from './mock-data';
import { SCHOOL } from './mock-data';
import { MOBILEAPP } from './mock-data';
import { HACK } from './mock-data';

@Injectable()
export class DataService {
    getWork(): Work[] {
        return WORK;
    }
    getSchool(): School[] {
        return SCHOOL;
    }
    getMobileApp(): MobileApp[] {
        return MOBILEAPP;
    }
    getHack(): Hack[] {
        return HACK;
    }
}