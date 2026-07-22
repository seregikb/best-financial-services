(function () {
  function field(form, name) {
    var input = form.querySelector('[name="' + name + '"]');
    return input ? input.value.trim() : "";
  }

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form.classList || !form.classList.contains("consultation-form")) {
      return;
    }

    if (!form.checkValidity()) {
      return;
    }

    event.preventDefault();

    var name = field(form, "name");
    var email = field(form, "email");
    var phone = field(form, "phone");
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

    window.location.href = "mailto:hello@best-financial-services.com?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
