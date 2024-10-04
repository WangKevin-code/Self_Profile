<template>
    <div class="d-flex justify-content-center">
        <div class="bound border border-dark rounded shadow" style="height: 30rem; width: 20rem;">
            <div class="row m-2" style="height: 20%;">
                <div class="col-9 p-1">
                    <div class="d-flex h-100 align-items-center justify-content-end bg-secondary rounded text-white resultBox"
                        style="overflow: hidden;">
                        <span class="m-2">{{ showString }}</span>
                    </div>
                </div>
                <div class="col-3 p-1">
                    <div class="d-flex h-100 align-items-center justify-content-center rounded clearBtn"
                        @click="numberClick('C')">
                        <span>C</span>
                    </div>
                </div>
            </div>

            <div class="row mx-2 h-75">
                <div class="col-3 p-1 numberBtnRow" v-for="label in  btnLabels " @click="numberClick(label.text)">
                    <div
                        :class="[label.isNumber ? 'Number' : 'OperationSymbols', 'd-flex h-100 align-items-center justify-content-center rounded']">
                        <span>{{ label.text }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.resultBox {
    font-size: 2rem;
}

.numberBtnRow {
    font-size: 2rem;
    font-weight: bolder;
    cursor: pointer;
}

.clearBtn {
    font-size: 2rem;
    font-weight: bolder;
    cursor: pointer;
    background-color: #ed9f0e;
}

.numberBtnRow div:hover,
.clearBtn:hover {
    background-color: burlywood;
}

.OperationSymbols {
    background-color: #ced4da;
}

.Number {
    background-color: #e9ecef;
}
</style>

<script setup>
import { onMounted, computed, ref, reactive } from 'vue';
const showString = ref("0");
let numberList = [];
let operationList = [];
let newNumber = true;
let isFloat = false;
const btnLabels = reactive([
    {
        text: "7",
        isNumber: true
    },
    {
        text: "8",
        isNumber: true
    },
    {
        text: "9",
        isNumber: true
    },
    {
        text: "+",
        isNumber: false
    },
    {
        text: "4",
        isNumber: true
    },
    {
        text: "5",
        isNumber: true
    },
    {
        text: "6",
        isNumber: true
    },
    {
        text: "-",
        isNumber: false
    },
    {
        text: "1",
        isNumber: true
    },
    {
        text: "2",
        isNumber: true
    },
    {
        text: "3",
        isNumber: true
    },
    {
        text: "*",
        isNumber: false
    },
    {
        text: "0",
        isNumber: true
    },
    {
        text: ".",
        isNumber: true
    },
    {
        text: "=",
        isNumber: true
    },
    {
        text: "/",
        isNumber: false
    },
]);

const numberClick = (number) => {
    let currentText = showString.value;
   
    switch (number) {
        case "C":
            numberList.length = 0;
            operationList.length = 0;
            showString.value = "0";
            newNumber = true;
            isFloat = false;
            break;
        case "=":
            showString.value = calculatorResult();
            numberList.length = 0;
            numberList.push(Number(showString.value));
            operationList.length = 0;
            newNumber = false;
            isFloat = false;
            break;
        case ".":
            if(!isFloat)
            {
                showString.value = currentText + number;
                isFloat = true;
            }
            break;
        default:
            if (showString.value == '0' && number == '0')
            {
                showString.value = '0';
            }
            else if(showString.value == '0' && number != '0')
            {
                showString.value = number;
            }
            else   
            {
                showString.value = currentText + number;
            }
            
            let n = Number(number);
            if(!isNaN(n))
            {
                if(newNumber)
                {
                    numberList.push(n);
                }   
                else
                {
                    if(isFloat)
                    {
                        if (numberList[numberList.length - 1].toString().includes('.')) 
                        {
                            numberList[numberList.length - 1] = Number(`${numberList[numberList.length - 1]}${n}`);
                        }
                        else
                        {
                            numberList[numberList.length - 1] = Number(`${numberList[numberList.length - 1]}.${n}`);
                        }
                    }
                    else
                    {
                        numberList[numberList.length - 1] = Number(`${numberList[numberList.length - 1]}${n}`);
                    }
                }
                newNumber = false;
                console.log(numberList);
            }
            else  
            {
                operationList.push(number);
                newNumber = true;
                isFloat = false;
            }
            break;
    }
}

const calculatorResult = () => {
    let result = 0;
    numberList.forEach((value, index) => {
        if(index == 0) 
        {
            result = value;
            return;
        }
        else
        {
            switch(operationList[index - 1])
            {
                case "+":
                    result = Number(new Decimal(result).plus(value).toString());
                    break;
                case "-":
                    result = Number(new Decimal(result).sub(value).toString());
                    break;
                case "*":
                    result = Number(new Decimal(result).mul(value).toString());
                    break;
                case "/":
                    result = Number(new Decimal(result).div(value).toString());    
                    break;
                default:
                    break;
            }
        }
    })
    return result;
}

onMounted(() => {
});
</script>