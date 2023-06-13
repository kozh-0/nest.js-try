
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateDonationInput {
    count: number;
    displayName: string;
    email: string;
    phone?: Nullable<string>;
    message?: Nullable<string>;
}

export interface Donation {
    id: number;
    count: number;
    displayName: string;
    email: string;
    phone?: Nullable<string>;
    message?: Nullable<string>;
}

export interface IQuery {
    donations(): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;
    donation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;
}

export interface IMutation {
    createDonation(createDonationInput: CreateDonationInput): Donation | Promise<Donation>;
}

type Nullable<T> = T | null;
