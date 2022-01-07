declare let x: boolean;
declare let y: Number;
declare let firstname: string;
declare let list: (string | number)[];
declare let stringList: string[];
declare let arr: number[];
declare let boolList: Array<number>;
declare let tuple: [string, number];
declare enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
declare let u: undefined;
declare let n: null;
declare function sum(a: number, b: number): void;
declare let value: any;
interface ButtonProps {
    label: string;
    color: string;
    size: number;
}
declare let obj: ButtonProps;
interface InputButtonProps {
    label: string;
    color?: string;
    size?: number;
}
declare let obj2: InputButtonProps;
declare function add(x: number, y: number): void;
declare let addFn: (x: number, y: number) => number;
declare let addAFn: (f: number, g: number) => void;
declare function printName({ firstname, lastname }: {
    firstname: string;
    lastname: string;
}): string;
interface Person {
    firstName: string;
    lastName?: string;
}
declare function displayName({ firstName, lastName }: Person): string;
declare let userType: "super-admin" | "admin" | "user";
declare let input: number | string | boolean | null;
declare type RequestLoading = {
    state: "loading";
};
declare type RequestFailed = {
    state: "failed";
    code: number;
};
declare type RequestSuccess = {
    state: "success";
    response: {
        title: string;
        status: boolean;
        id: number;
        count: number;
    };
};
declare type NewtworkStats = RequestLoading | RequestFailed | RequestSuccess;
interface ErrorInterface {
    status: boolean;
    error?: {
        message: string;
    };
}
interface CityData {
    cityName: {
        title: string;
    };
}
interface CountryData {
    details: {
        countOfCities: number;
        capital: string;
    };
}
declare type CityResponse = ErrorInterface & CityData;
declare type CountryResponse = ErrorInterface & CountryData;
declare let response: CityResponse;
