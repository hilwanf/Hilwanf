document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById("form-container");
    const form = document.createElement("form");
    const title = document.createElement("h1");
    title.textContent = "Formulir Pendaftaran";
    form.appendChild(title);

    function createFormGroup(labelText, inputType, inputId, placeholderText = "") {
        const formGroup = document.createElement("div");
        formGroup.classList.add("form-group");

        const label = document.createElement("label");
        label.setAttribute("for", inputId);
        label.textContent = labelText;
        formGroup.appendChild(label);

        const input = document.createElement("input");
        input.type = inputType;
        input.id = inputId;
        input.name = inputId;
        input.placeholder = placeholderText;

        // Event: Menangani perubahan input (change event)
        input.addEventListener('change', function() {
            console.log(`Input ${inputId} diubah menjadi: ${input.value}`);
        });

        input.addEventListener('focus', function() {
            input.style.backgroundColor = '#f5a623'; // Mengubah warna latar belakang saat fokus
            input.style.color = '#00796b'; // Mengubah warna teks saat fokus
            input.style.borderColor = '#004d40'; // Mengubah warna border saat fokus
        });
        
        // Event: Menangani blur (saat kehilangan fokus)
        input.addEventListener('blur', function() {
            input.style.backgroundColor = ''; // Kembali ke warna latar belakang semula
            input.style.color = ''; // Kembali ke warna teks semula
            input.style.borderColor = ''; // Kembali ke warna border semula
        });

        formGroup.appendChild(input);
        return formGroup;
    }

    form.appendChild(createFormGroup("Nama:", "text", "fname", "Your name.."));
    form.appendChild(createFormGroup("NIM:", "text", "nim", "NIM.."));
    form.appendChild(createFormGroup("Tempat Lahir:", "text", "tlahir", "Tempat Lahir.."));
    form.appendChild(createFormGroup("Tanggal Lahir:", "date", "tglahir"));

    const prodiGroup = document.createElement("div");
    prodiGroup.classList.add("form-group");

    const prodiLabel = document.createElement("label");
    prodiLabel.setAttribute("for", "Prodi");
    prodiLabel.textContent = "Program Studi:";
    prodiGroup.appendChild(prodiLabel);

    const prodiSelect = document.createElement("select");
    prodiSelect.id = "Prodi";
    prodiSelect.name = "Prodi";

    const prodiOptions = ["PGSD", "PGPAUD", "PKP", "SIK", "LK"];
    prodiOptions.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        prodiSelect.appendChild(option);
    });

    // Event: Menangani perubahan pada dropdown (change event)
    prodiSelect.addEventListener('change', function() {
        alert(`Anda memilih program studi: ${this.value}`);
    });

    prodiGroup.appendChild(prodiSelect);
    form.appendChild(prodiGroup);

    const genderGroup = document.createElement("div");
    genderGroup.classList.add("form-group", "inline");

    const genderLabel = document.createElement("label");
    genderLabel.classList.add("gender-label");
    genderLabel.textContent = "Jenis Kelamin:";
    genderGroup.appendChild(genderLabel);

    const genderOptions = ["Laki-laki", "Perempuan"];
    const genderButtons = [];

    genderOptions.forEach(gender => {
        const genderButton = document.createElement("button");
        genderButton.type = "button";
        genderButton.textContent = gender;
        genderButton.classList.add("gender-button");
        genderButton.dataset.gender = gender;

        genderButton.addEventListener('click', function() {
            genderButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            
            const genderDisplay = document.getElementById('selected-gender');
            if (!genderDisplay) {
                const display = document.createElement('p');
                display.id = 'selected-gender';
                genderGroup.appendChild(display);
            }
            document.getElementById('selected-gender').textContent = `Anda memilih: ${this.dataset.gender}`;
        });

        genderButtons.push(genderButton);
        genderGroup.appendChild(genderButton);
    });

    form.appendChild(genderGroup);

    
    const hobiGroup = document.createElement("div");
    hobiGroup.classList.add("form-group");

    const hobiLabel = document.createElement("label");
    hobiLabel.textContent = "Hobi:";
    hobiGroup.appendChild(hobiLabel);

    const checkboxGroup = document.createElement("div");
    checkboxGroup.classList.add("checkbox-group");

    ["Baca", "Nulis", "Nonton", "Olahraga", "Bernyanyi"].forEach(hobi => {
        const hobiOption = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "hobi";
        checkbox.value = hobi;

        
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                console.log(`${this.value} ditambahkan ke hobi.`);
            } else {
                console.log(`${this.value} dihapus dari hobi.`);
            }
        });

        hobiOption.appendChild(checkbox);
        hobiOption.appendChild(document.createTextNode(hobi));
        checkboxGroup.appendChild(hobiOption);
    });

    hobiGroup.appendChild(checkboxGroup);
    form.appendChild(hobiGroup);

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Simpan";

    // Event: Menangani pengiriman form (submit event)
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form
        alert("Form telah disimpan!");
    });

    form.appendChild(submitButton);
    formContainer.appendChild(form);
});
