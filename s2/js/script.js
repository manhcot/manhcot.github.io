// Function to handle the registration form validation and submission
function Register() {
    const form = $("#registerForm"); // Get the registration form element by ID
    if (!form) return; // If form doesn't exist, exit the function

    // Attach submit event handler to the form
    form.on("submit", function(event) {
        // Get form input values
        var name = $('#username').val();
        var genderm = $('#genderm').prop("checked");
        var genderf = $('#genderf').prop("checked");
        var email = $('#email').val();
        var pwd1 = $('#password').val();
        var pwd2 = $('#retypepsswd').val();
        var ice1 = $("#ice1").prop("checked");
        var ice2 = $("#ice2").prop("checked");
        var ice3 = $("#ice3").prop("checked");
        var ice4 = $("#ice4").prop("checked");
        var location = $("location").val();
        var errMsg = ""; // Initialize error message container
        var result = true; // Result flag for form validation success/failure

        var pwdpattern1 = /^.{8,}$/; // Regex to check minimum 8 characters in password

        // Validation checks
        if (name == "") {
            errMsg += "Name cannot be empty.\n";
        }
        if (email == "") {
            errMsg += "Email cannot be empty.\n";
        }
        if (pwd1 == "") {
            errMsg += "Password cannot be empty.\n";
        }
        if (pwd2 == "") {
            errMsg += "Please retype the password.\n";
        }
        // Check if neither gender radio button is selected
        if ((genderm == "") && (genderf == "")) {
            errMsg += "A gender must be selected.\n";
        }
        // Check if passwords match
        if (pwd1 != pwd2) {
            errMsg += "Passwords do not match.\n";
        }
        // Check password length with regex
        if (!pwd1.match(pwdpattern1)) {
            errMsg += "Password must contain at least 8 characters.\n";
        }
        // Check if at least one ice cream flavor checkbox is selected
        if ((!ice1) && (!ice2) && (!ice3) && (!ice4)) {
            errMsg += "Please select at least one out of 4 ice cream flavors.\n";
        }

        // If there are validation errors, alert and prevent form submission
        if (errMsg != "") {
            alert(errMsg);
            result = false;
        }
        return result; // Allow or prevent form submission based on validation
    });
}


function toggleDeliveryFieldsRadio() {
    const selectedVal = $("input[name='deliveryOption']:checked").val();
    if (selectedVal === 'Delivery') {
        deliveryAddressSection.show();
        billingAddressInput.prop("disabled", false);
        sameAsDeliveryCheckbox.prop("disabled", false);
        deliveryAddressInput.prop("disabled", false);
    } else if (selectedVal === 'Pickup') {
        deliveryAddressSection.hide();
        billingAddressInput.prop("disabled", true).val("");
        sameAsDeliveryCheckbox.prop("checked", false).prop("disabled", true);
        deliveryAddressInput.prop("disabled", true).val("");
    }
}

$("input[name='deliveryOption']").on('change', toggleDeliveryFieldsRadio);


// Function to handle order form interactivity and validation
function Order() {
    const form = $("#orderForm");
    if (!form) return;

    const deliveryOption = $('#deliveryOption');
    const deliveryAddressSection = $('#deliveryAddressSection');
    const paymentMethod = $('#paymentMethod');
    const creditCardSection = $('#creditCardSection');
    const billingAddressInput = $("#billingAddress");
    const sameAsDeliveryCheckbox = $("#sameAsDelivery"); // get the checkbox element

    // Show/hide delivery address section and enable/disable billing and checkbox based on delivery option
    if (deliveryOption && deliveryAddressSection) {
        deliveryOption.on('change', () => {
            if (deliveryOption.val() === 'Delivery') {
                deliveryAddressSection.show();
                billingAddressInput.prop("disabled", false);
                sameAsDeliveryCheckbox.prop("disabled", false);
                $("#deliveryAddress").prop("disabled", false);
            } else if (deliveryOption.val() === 'Pickup') {
                deliveryAddressSection.hide();
                billingAddressInput.prop("disabled", true).val("");
                sameAsDeliveryCheckbox.prop("checked", false).prop("disabled", true);
                $("#deliveryAddress").prop("disabled", true);
            }
        });
    }

    // Show/hide credit card section based on payment method
    if (paymentMethod && creditCardSection) {
        paymentMethod.on('change', () => {
            if (paymentMethod.val() === 'Pay Online') {
                creditCardSection.show();
                // Enable credit card inputs
                $("#creditCardType").prop("disabled", false);
                $("#creditCardNumber").prop("disabled", false);
                $("#cvv").prop("disabled", false);
                $("#expiryDate").prop("disabled", false);
            } else if (paymentMethod.val() === 'Pay on Pickup') {
                creditCardSection.hide();
                // Disable credit card inputs
                $("#creditCardType").val("").prop("disabled", true);
                $("#creditCardNumber").val("").prop("disabled", true);
                $("#cvv").val("").prop("disabled", true);
                $("#expiryDate").val("").prop("disabled", true);
            }
        });
    }

    // Handle "Same as Delivery" checkbox autofill
    sameAsDeliveryCheckbox.on("change", function() {
        const sameasdeliveryVal = $("#deliveryAddress").val();
        const isChecked = $(this).prop("checked");

        if (isChecked) {
            if (sameasdeliveryVal.trim() === "") {
                alert("Please enter your delivery address first.");
                $(this).prop("checked", false);
                billingAddressInput.prop("disabled", false).val("");
                return;
            }
            billingAddressInput.val(sameasdeliveryVal).prop("disabled", true);
        } else {
            billingAddressInput.prop("disabled", false).val("");
        }
    });

    // Form submit handler with validation and setting payment method on pickup
    form.on("submit", function(event) {
        const deliveryOptionVal = $("#deliveryOption").val();
        const delivery = deliveryOptionVal === "Delivery";
        const pickup = deliveryOptionVal === "Pickup";
        const deliadd = $("#deliveryAddress").val();
        const billadd = billingAddressInput.val();
        const contact = $("#contactNumber").val();
        const email = $("#receiptEmail").val();
        let cardType = $("#creditCardType").val();;
        const cvv = $("#cvv").val();
        const expirydate = $("#expiryDate").val();
        let errMsg = "";
        let result = true;

        if (!delivery && !pickup) {
            errMsg += "Please select delivery or pickup.\n";
        }

        if (delivery) {
            if (!deliadd || !billadd) {
                errMsg += "Please enter both delivery and billing address.\n";
            }
        }
        const paymentVal = paymentMethod.val();

        if (pickup) {
            billingAddressInput.prop("disabled", true);

            if (paymentVal === "Pay on Pickup") {
                // Clear and disable credit card inputs
                $("#creditCardType").val("").prop("disabled", true);
                $("#creditCardNumber").val("").prop("disabled", true);
                $("#cvv").val("").prop("disabled", true);
                $("#expiryDate").val("").prop("disabled", true);
            } else if (paymentVal === "Pay Online") {
                // Enable credit card inputs, because user wants to pay online
                $("#creditCardType").prop("disabled", false);
                $("#creditCardNumber").prop("disabled", false);
                $("#cvv").prop("disabled", false);
                $("#expiryDate").prop("disabled", false);
            }
        } else {
            // If delivery, enable all billing and credit card inputs
            billingAddressInput.prop("disabled", false);
            $("#creditCardType").prop("disabled", false);
            $("#creditCardNumber").prop("disabled", false);
            $("#cvv").prop("disabled", false);
            $("#expiryDate").prop("disabled", false);
        }
        if (contact === "") {
            errMsg += "Please enter your contact number.\n";
        }

        if (email === "") {
            errMsg += "Please enter your email for receipt.\n";
        }

        if (paymentMethod.val() !== "Pay Online" && paymentMethod.val() !== "Pay on Pickup") {
            errMsg += "Please select a payment method.\n";
        }
        var creditnum = $("#creditCardNumber").val() || "";
        creditnum = creditnum.trim().replace(/\D/g, ''); // clean input 
        if (paymentMethod.val() === "Pay Online") {
            if (!cardType || !creditnum) {
                errMsg += "Please select a type of card and enter a credit card number.\n";
            } else {
                // Check if creditnum contains only digits
                var digitsOnly = /^\d+$/; // regex to match one or more digits

                if (!digitsOnly.test(creditnum)) {
                    errMsg += "Credit card number must contain only digits.\n";
                }
                if (cardType === "Visa" || cardType === "MasterCard") {
                    if (creditnum.length !== 16) {
                        errMsg += "Visa or MasterCard must have 16 digits.\n";
                    }
                } else if (cardType === "American Express") {
                    if (creditnum.length !== 15) {
                        errMsg += "American Express must have 15 digits.\n";
                    }
                }
            }

            if (cvv === "") {
                errMsg += "CVV is required.\n";
            } else if (cvv.length < 3) {
                errMsg += "CVV must be at least 3 digits.\n";
            }

            if (expirydate === "") {
                errMsg += "Please enter the expiry date.\n";
            }
        }

        if (errMsg !== "") {
            alert(errMsg);
            event.preventDefault();
            result = false;
        }

        return result;
    });

    // Also handle the browser back button restoring form state
    window.addEventListener('pageshow', function(event) {
        deliveryOption.trigger('change');
        deliveryOption.trigger('change');
        paymentMethod.trigger('change');
    });
}



// Function to highlight the active page link in navigation
function ActivePage() {
    const currentPath = window.location.pathname; // Get current page path
    $("nav a").each(function() {
        const linkPath = $(this).attr("href"); // Get link href
        // Add "active" class if link matches current path, else remove it
        if (currentPath.endsWith(linkPath)) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

// Initialization function to run on DOM ready
function init() {
    Register(); // Initialize registration form functionality
    Order(); // Initialize order form functionality
    ActivePage(); // Highlight active page in navigation
}

// Add event listener for DOMContentLoaded to initialize scripts after page loads
document.addEventListener("DOMContentLoaded", init);