const password = document.getElementById("password");
const progress = document.getElementById("progress");
const strength = document.getElementById("strength");
const length = document.getElementById("length");
strength.innerHTML = "Weak";
length.innerHTML = ' 0 ';
let number = 0;
function strengthCheck() {
    length.innerHTML = ` ${password.value.length} `;
    number = 0
    progress.style.width = "0%";
    progress.style.backgroundColor = "green";
    document.querySelectorAll("#lc, #uc, #no, #sy").forEach(element => {
        element.style.color = "#d3d3d3";
    });
    this.passwordDesign();
    if (password.value.length < 4) {
        return
    }
    this.passwordStrength()
}

function passwordDesign() {
    strength.innerHTML = "Weak";
    if (/[a-z]/.test(password.value)) {
        document.getElementById("lc").style.color = "green";
        ++number
    }
    if (/[A-Z]/.test(password.value)) {
        document.getElementById("uc").style.color = "green";
        ++number
    }
    if (/[0-9]/.test(password.value)) {
        document.getElementById("no").style.color = "green";
        ++number
    }
    if (/[^a-zA-Z0-9]/.test(password.value)) {
        document.getElementById("sy").style.color = "green";
        ++number
    }
}

function passwordStrength() {
    if (password.value.length > 4) {
        ++number
        ++number
    }
    if (password.value.length > 6) {
        ++number
    }
    if (password.value.length > 7) {
        ++number
    }
    if (password.value.length > 9) {
        ++number
        ++number
    }
    progress.style.width = `${number * 10}%`;
    if (number < 5) {
        progress.style.backgroundColor = "red";
        strength.innerHTML = "Weak";
    } else if (number < 8) {
        progress.style.backgroundColor = "orange";
        strength.innerHTML = "Medium";
    } else {
        progress.style.backgroundColor = "green";
        strength.innerHTML = "Strong";
    }
}