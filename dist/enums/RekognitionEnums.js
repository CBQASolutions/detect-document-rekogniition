"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowedPassportPhrases = exports.AllowedPassportWords = exports.DriversLicenceWords = exports.AllowedINEPhrases = exports.AllowedINEWords = exports.AllowedRekognitionLabels = void 0;
var AllowedRekognitionLabels;
(function (AllowedRekognitionLabels) {
    AllowedRekognitionLabels["DOCUMENT"] = "Document";
    AllowedRekognitionLabels["ID_CARD"] = "Id Cards";
})(AllowedRekognitionLabels || (exports.AllowedRekognitionLabels = AllowedRekognitionLabels = {}));
var AllowedINEWords;
(function (AllowedINEWords) {
    AllowedINEWords["INSTITUTO_NACIONAL_ELECTORAL"] = "INSTITUTO";
    AllowedINEWords["NACIONAL"] = "NACIONAL";
    AllowedINEWords["ELECTORAL"] = "ELECTORAL";
    AllowedINEWords["CREDENCIAL"] = "CREDENCIAL";
    AllowedINEWords["PARA"] = "PARA";
    AllowedINEWords["VOTAR"] = "VOTAR";
    AllowedINEWords["MEXICO"] = "M\u00C9XICO";
})(AllowedINEWords || (exports.AllowedINEWords = AllowedINEWords = {}));
var AllowedINEPhrases;
(function (AllowedINEPhrases) {
    AllowedINEPhrases["INSTITUTO_NACIONAL_ELECTORAL"] = "INSTITUTO NACIONAL ELECTORAL";
    AllowedINEPhrases["CREDENCIAL_PARA_VOTAR"] = "CREDENCIAL PARA VOTAR";
})(AllowedINEPhrases || (exports.AllowedINEPhrases = AllowedINEPhrases = {}));
var DriversLicenceWords;
(function (DriversLicenceWords) {
    DriversLicenceWords["LICENCIA"] = "LICENCIA";
    DriversLicenceWords["CONDUCIR"] = "CONDUCIR";
})(DriversLicenceWords || (exports.DriversLicenceWords = DriversLicenceWords = {}));
var AllowedPassportWords;
(function (AllowedPassportWords) {
    AllowedPassportWords["ESTADOS"] = "ESTADOS";
    AllowedPassportWords["UNIDOS"] = "UNIDOS";
    AllowedPassportWords["MEXICANOS"] = "MEXICANOS";
    AllowedPassportWords["PASAPORTE"] = "PASAPORTE";
})(AllowedPassportWords || (exports.AllowedPassportWords = AllowedPassportWords = {}));
var AllowedPassportPhrases;
(function (AllowedPassportPhrases) {
    AllowedPassportPhrases["ESTADOS_UNIDOS_MEXICANOS"] = "ESTADOS UNIDOS MEXICANOS";
})(AllowedPassportPhrases || (exports.AllowedPassportPhrases = AllowedPassportPhrases = {}));
