(function () {
  function field(form, name) {
    var input = form.querySelector('[name="' + name + '"]');
    return input ? input.value.trim() : "";
  }

  function validatePhone(input) {
    var value = input.value.trim();
    var digits = value.replace(/\D/g, "");
    var validShape = /^\+?[0-9][0-9\s().-]{6,19}$/.test(value);
    var validLength = digits.length >= 7 && digits.length <= 15;
    var message = "Enter a valid phone number with 7 to 15 digits. Country code is optional.";

    input.setCustomValidity(value && (!validShape || !validLength) ? message : "");
  }

  document.addEventListener("input", function (event) {
    if (event.target && event.target.name === "phone") {
      validatePhone(event.target);
    }
  });

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form.classList || !form.classList.contains("consultation-form")) {
      return;
    }

    var phoneInput = form.querySelector('[name="phone"]');
    if (phoneInput) {
      validatePhone(phoneInput);
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    event.preventDefault();

    var name = field(form, "name");
    var email = field(form, "email");
    var phone = field(form, "phone");
    var recipient = form.getAttribute("data-recipient") || "hello@best-financial-services.com";
    var subject = "Educational consultation request";
    var body = [
      "Name: " + name,
      "Email: " + email,
      "Phone: " + phone,
      "Page: " + window.location.href,
      "",
      "Consent: The visitor agreed to be contacted about educational financial resources.",
      "Note: This request is not for personalized investment, tax, or legal advice."
    ].join("\n");

    var status = form.querySelector(".form-status");
    if (status) {
      status.textContent = "Your email app should open with the request details. Please send the message to complete the request.";
    }

    window.location.href = "mailto:" + recipient + "?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
