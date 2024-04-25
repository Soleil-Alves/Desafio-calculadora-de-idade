const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

let isValid = false;
const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");

const error_year = document.querySelector(".error-year");
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
submit_btn.addEventListener('click', calculoData);

input_day.addEventListener("input", (e) => {
    if (+input_day.value > 31) {
        error_day.textContent = "insira uma data válida";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = "";
    }
    if (+input_day.value === 0){
        isValid = false;
        error_day.textContent = "Este campo é obrigatório";
        isValid = false;
        return;
    } else {
        error_day.textContent = "";
    }
});

input_month.addEventListener("input", (e) => {
    if (+input_month.value > 12) {
        error_month.textContent = "insira uma data válida";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = "";
    }
    if (+input_month.value === 0) {
        isValid = false;
        error_month.textContent = "Este campo é obrigatório";
        isValid = false;
        return;
    } else {
        error_month = textContent = "";
    }
});
    input_year.addEventListener("input", (e) => {
        if (+input_year.value > 2024) {
            error_year.textContent = "insira uma data válida";
            isValid = false;
            return;
        } else {
            isValid = true;
            error_year.textContent = "";
        }
        if (+input_year.value === 0) {
            isValid = false;
            error_year.textContent = "Este campo é obrigatório";
            isValid = false;
            return;
        } else {
            error_year = textContent = "";
        }
});

function calculoData() {
    if (isValid) {
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday);
        let birthObj = new Date (birthday);
        let idadeDiff = Date.now() - birthObj;
        let idadeData = new Date(idadeDiff);
        let ageYears = idadeData.getFullYear() - 1970;
        let ageMonths = idadeData.getMonth();
        let ageDays = idadeData.getDay();
        output_day.textContent = ageDays;
        output_month.textContent = ageMonths;
        output_year.textContent = ageYears;
    } else {
        alert("Erro");
    }
}
