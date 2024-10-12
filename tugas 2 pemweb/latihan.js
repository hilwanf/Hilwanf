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

  prodiGroup.appendChild(prodiSelect);
  form.appendChild(prodiGroup);

  
  const genderGroup = document.createElement("div");
  genderGroup.classList.add("form-group", "inline");

  const genderLabel = document.createElement("label");
  genderLabel.classList.add("gender-label");
  genderLabel.textContent = "Jenis Kelamin:";
  genderGroup.appendChild(genderLabel);

  ["Laki-laki", "Perempuan"].forEach(gender => {
      const genderOption = document.createElement("label");
      genderOption.classList.add("gender-option");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "jk";
      radio.value = gender;
      genderOption.appendChild(radio);
      genderOption.appendChild(document.createTextNode(gender));
      genderGroup.appendChild(genderOption);
  });

  form.appendChild(genderGroup);

  // Hobi
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
      hobiOption.appendChild(checkbox);
      hobiOption.appendChild(document.createTextNode(hobi));
      checkboxGroup.appendChild(hobiOption);
  });

  hobiGroup.appendChild(checkboxGroup);
  form.appendChild(hobiGroup);

  
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Simpan";
  form.appendChild(submitButton);

  
  formContainer.appendChild(form);
});
