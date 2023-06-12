var EL_muesli_clicker = document.querySelector('#muesli_bar')
var EL_muesli_upg1 = document.querySelector('#muesli_upg1')
var EL_muesli_upg2 = document.querySelector('#muesli_upg2')
var EL_muesli_wslave = document.querySelector('#muesli_wslave')
var EL_muesli_nslave = document.querySelector('#muesli_nslave')
var EL_muesli_mslave = document.querySelector('#muesli_Mega_slave')
var TXT_muesli_value = document.querySelector('#muesli_value')
var TXT_Total_dps = document.querySelector('#tot_dps')
var TXT_Total_dpc = document.querySelector('#tot_dpc')
var rand = Math.floor(Math.random() * 10)     

EL_muesli_clicker.addEventListener('click', gib_muesli)
EL_muesli_upg1.addEventListener('click', upgrade1)
EL_muesli_upg2.addEventListener('click', upgrade2)
EL_muesli_wslave.addEventListener('click', wslave)
EL_muesli_nslave.addEventListener('click', nslave)
EL_muesli_mslave.addEventListener('click', mslave)


muesli_money = 100000000
muesli_dpc = 1

//Upgrade
upgrade1_cost = 100
upgrade1_dpc = 1
upgrade1_ammount = 1

upgrade2_cost = 1000
upgrade2_dpc = 100
upgrade2_ammount = 1


//1st slave
wslave_cost = 100
wslave_dps = 10
wslave_profit = 0
wowner = false

//2nd slave
nslave_cost = 1000
nslave_dps = 100
nslave_profit = 0
nowner = false

//3rd slave
mslave_cost = 10000
mslave_dps = 1000
mslave_profit = 0
mowner = false

//Total dmg from slaves and total DPC
total_dmg = wslave_profit + nslave_profit + mslave_profit
total_dpc = muesli_dpc



TXT_muesli_value.innerHTML = muesli_money
EL_muesli_upg1.innerHTML = "Upgrade " + upgrade1_ammount + "<br><br>Cost: " + upgrade1_cost + "<br>DPC: " + upgrade1_dpc
EL_muesli_upg2.innerHTML = "Mega upgrade " + upgrade2_ammount + "<br><br>Cost: " + upgrade2_cost + "<br>DPC: " + upgrade2_dpc
EL_muesli_wslave.innerHTML = "Wimpy Slave <br>" + "<br>Cost: " + wslave_cost + "<br>DPS: " + wslave_dps
EL_muesli_nslave.innerHTML = "Normal slave <br>" + "<br>Cost: " + nslave_cost + "<br>DPS: " + nslave_dps
EL_muesli_mslave.innerHTML = "Mega Slave <br>" + "<br>Cost: " + mslave_cost + "<br>DPS: " + mslave_dps
        
function gib_muesli(){
    rand = Math.floor(Math.random() * 10)
    if (rand == 0){
        muesli_money += muesli_dpc * 2
        TXT_muesli_value.innerHTML = muesli_money
    } else {
        muesli_money += muesli_dpc
        TXT_muesli_value.innerHTML = muesli_money
        
    }
}

function upgrade1(){
    if (muesli_money > upgrade1_cost - 1){
        muesli_dpc += upgrade1_dpc
        muesli_money -= upgrade1_cost
        upgrade1_cost += 100
        upgrade1_dpc += 1
        upgrade1_ammount+= 1
        EL_muesli_upg1.innerHTML = "Upgrade " + upgrade1_ammount + "<br><br>Cost: " + upgrade1_cost + "<br>DPC: " + upgrade1_dpc
        TXT_muesli_value.innerHTML = muesli_money
        TXT_Total_dpc.innerHTML = "Total DPC: <br>" + total_dpc
        if(upgrade1_ammount == 100){
            document.querySelector('#muesli_upg1').disabled = true;
        }
    }
}
function upgrade2(){
    if (muesli_money > upgrade2_cost - 1){
        muesli_dpc += upgrade2_dpc
        muesli_money -= upgrade2_cost
        upgrade2_cost += 1000
        upgrade2_dpc += 100
        upgrade2_ammount+= 1
        EL_muesli_upg2.innerHTML = "Mega upgrade " + upgrade2_ammount + "<br><br>Cost: " + upgrade2_cost + "<br>DPC: " + upgrade2_dpc
        TXT_muesli_value.innerHTML = muesli_money
        TXT_Total_dpc.innerHTML = "Total DPC: <br>" + total_dpc
        if(upgrade2_ammount == 100){
            document.querySelector('#muesli_upg2').disabled = true;
        }
    }
}

function wslave(){
    if (muesli_money > wslave_cost - 1){
        muesli_money -= wslave_cost
        wslave_cost *= 2
        wslave_profit += wslave_dps
        TXT_Total_dps.innerHTML = "Total DPS: <br>" + total_dmg
        TXT_muesli_value.innerHTML = muesli_money
        wowner = true
        if (wowner = true){
            EL_muesli_wslave.innerHTML = "Wimpy Slave <br>" + "Owned"
            document.querySelector('#muesli_wslave').disabled = true;
        }
    }
    
}
function nslave(){
    if (muesli_money > nslave_cost - 1){
        muesli_money -= nslave_cost
        nslave_cost *= 2
        nslave_profit += nslave_dps
        TXT_Total_dps.innerHTML = "Total DPS: <br>" + total_dmg
        TXT_muesli_value.innerHTML = muesli_money
        nowner = true
        if (nowner = true){
            EL_muesli_nslave.innerHTML = "Normal slave <br>" + "Owned"
            document.querySelector('#muesli_nslave').disabled = true;
        }
    }
    
}
function mslave(){
    if (muesli_money > mslave_cost - 1){
        muesli_money -= mslave_cost
        mslave_cost *= 2
        mslave_profit += mslave_dps
        TXT_Total_dps.innerHTML = "Total DPS: <br>" + total_dmg
        TXT_muesli_value.innerHTML = muesli_money
        mowner = true
        if (mowner = true){
            EL_muesli_mslave.innerHTML = "Mega Slave <br>" + "Owned"
            document.querySelector('#muesli_Mega_slave').disabled = true;
        }
    }
    
}

function slave_profits(){
    if (wowner == true){
        muesli_money += wslave_profit
        TXT_muesli_value.innerHTML = muesli_money
    }
    if (mowner == true){
        muesli_money += mslave_profit
        TXT_muesli_value.innerHTML = muesli_money
    }
}
function var_updater(){
    total_dmg = wslave_profit + nslave_profit + mslave_profit
    total_dpc = upgrade1_dpc

}
function txt_updater(){
    TXT_Total_dpc.innerHTML = "Total DPC: <br>" + muesli_dpc
    TXT_Total_dps.innerHTML = "Total DPS: <br>" + total_dmg
}
setInterval(slave_profits, 0)
setInterval(var_updater, 0)
setInterval(txt_updater, 0)