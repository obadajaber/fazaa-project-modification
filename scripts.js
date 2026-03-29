document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // 1. قاموس الترجمة (Translations Dictionary)
    // ==========================================
    const translations = {
        login_title: { ar: 'تسجيل الدخول | فزعة', en: 'Login | Fazaa' },
        register_title: { ar: 'إنشاء حساب | فزعة', en: 'Register | Fazaa' },
        platform_name: { ar: 'فـــــزعـــــة', en: 'F A Z A A' },
        slogan: { ar: 'فزعتك بتنقذ حياة', en: 'Your help saves a life' },
        login_welcome: { ar: 'أهلاً بك مجدداً، يرجى تسجيل الدخول للمتابعة', en: 'Welcome back, please log in to continue' },
        register_welcome: { ar: 'انضم إلينا الآن، خطوة صغيرة تصنع فرقاً كبيراً', en: 'Join us now, a small step makes a big difference' },
        email_label: { ar: 'البريد الإلكتروني', en: 'Email Address' },
        email_invalid: { ar: 'يرجى إدخال بريد إلكتروني صحيح', en: 'Please enter a valid email' },
        password_label: { ar: 'كلمة المرور', en: 'Password' },
        password_invalid: { ar: 'يرجى إدخال كلمة المرور', en: 'Please enter your password' },
        remember_me: { ar: 'تذكرني', en: 'Remember Me' },
        forgot_password: { ar: 'نسيت كلمة المرور؟', en: 'Forgot Password?' },
        login_btn: { ar: 'تسجيل الدخول', en: 'Log In' },
        or_continue_with: { ar: 'أو المتابعة عبر', en: 'Or continue with' },
        social_google: { ar: 'المتابعة باستخدام Google', en: 'Continue with Google' },
        social_x: { ar: 'المتابعة باستخدام X', en: 'Continue with X' },
        social_facebook: { ar: 'المتابعة باستخدام Facebook', en: 'Continue with Facebook' },
        no_account: { ar: 'ما عندك حساب؟', en: 'Don\'t have an account?' },
        create_account_link: { ar: 'إنشاء حساب جديد', en: 'Create a new account' },
        register_as: { ar: 'أريد التسجيل كـ:', en: 'I want to register as:' },
        role_donor: { ar: 'متبرع', en: 'Donor' },
        role_patient: { ar: 'مريض', en: 'Patient' },
        role_hospital: { ar: 'مستشفى', en: 'Hospital' },
        role_admin: { ar: 'أدمن', en: 'Admin' },
        full_name: { ar: 'الاسم الكامل', en: 'Full Name' },
        name_invalid: { ar: 'يرجى إدخال الاسم', en: 'Please enter your name' },
        phone_number: { ar: 'رقم الهاتف', en: 'Phone Number' },
        phone_invalid: { ar: 'يرجى إدخال رقم هاتف صحيح', en: 'Please enter a valid phone number' },
        password_length: { ar: 'يجب أن تتكون من 6 أحرف على الأقل', en: 'Must be at least 6 characters' },
        confirm_password: { ar: 'تأكيد كلمة المرور', en: 'Confirm Password' },
        password_mismatch: { ar: 'كلمات المرور غير متطابقة', en: 'Passwords do not match' },
        donor_data: { ar: 'بيانات المتبرع', en: 'Donor Information' },
        select_blood: { ar: 'اختر فصيلة الدم', en: 'Select Blood Type' },
        blood_type: { ar: 'فصيلة الدم', en: 'Blood Type' },
        required_field: { ar: 'مطلوب', en: 'Required' },
        are_you_smoker: { ar: 'هل أنت مدخن؟', en: 'Are you a smoker?' },
        non_smoker: { ar: 'غير مدخن', en: 'Non-smoker' },
        smoker: { ar: 'مدخن', en: 'Smoker' },
        smoking: { ar: 'التدخين', en: 'Smoking' },
        last_donation: { ar: 'آخر تاريخ تبرع', en: 'Last Donation Date' },
        patient_data: { ar: 'بيانات المريض', en: 'Patient Information' },
        select_blood_needed: { ar: 'اختر فصيلة الدم المحتاجة', en: 'Select Required Blood Type' },
        select_urgency: { ar: 'اختر نوع الحالة', en: 'Select Urgency Level' },
        urgency_normal: { ar: 'عادي', en: 'Normal' },
        urgency_emergency: { ar: 'طارئ جداً', en: 'Critical Emergency' },
        urgency: { ar: 'نوع الحالة', en: 'Urgency Level' },
        hospital_data: { ar: 'بيانات المستشفى', en: 'Hospital Information' },
        hospital_name: { ar: 'اسم المستشفى', en: 'Hospital Name' },
        hospital_location: { ar: 'الموقع / المدينة', en: 'Location / City' },
        create_account_btn: { ar: 'إنشاء حساب', en: 'Create Account' },
        already_have_account: { ar: 'عندك حساب بالفعل؟', en: 'Already have an account?' },
        login_link: { ar: 'تسجيل الدخول', en: 'Log In' },
        strength_weak: { ar: 'ضعيفة', en: 'Weak' },
        strength_medium: { ar: 'متوسطة', en: 'Medium' },
        strength_strong: { ar: 'قوية', en: 'Strong' },
        req_length: { ar: '6 أحرف على الأقل', en: 'At least 6 characters' },
        req_upper: { ar: 'حرف إنجليزي كبير واحد على الأقل', en: 'At least one uppercase letter' },
        req_number: { ar: 'يحتوي على أرقام وأحرف', en: 'Contains numbers and letters' },
        req_symbol: { ar: 'رمز واحد على الأقل (مثل @, #, $)', en: 'At least one symbol (e.g., @, #, $)' },
        forgot_pass_title: { ar: 'استعادة كلمة المرور', en: 'Reset Password' },
        forgot_pass_desc: { ar: 'أدخل بريدك الإلكتروني المسجل لدينا وسنرسل لك رابطاً لإعادة تعيين كلمة المرور.', en: 'Enter your registered email and we will send you a password reset link.' },
        send_reset_link: { ar: 'إرسال رابط الاستعادة', en: 'Send Reset Link' },
        otp_title: { ar: 'التحقق من الحساب', en: 'Account Verification' },
        otp_desc: { ar: 'أدخل رمز التحقق المكون من 4 أرقام الذي أرسلناه للتو إلى بريدك الإلكتروني.', en: 'Enter the 4-digit verification code we just sent to your email.' },
        verify_btn: { ar: 'تأكيد الرمز', en: 'Verify Code' },
        didnt_receive_code: { ar: 'لم تستلم الرمز؟', en: 'Didn\'t receive code?' },
        resend_code: { ar: 'إعادة إرسال', en: 'Resend' },
        terms_agree: { ar: 'أوافق على', en: 'I agree to the' },
        terms_link: { ar: 'شروط الاستخدام وسياسة الخصوصية', en: 'Terms of Service and Privacy Policy' },
        code_resent: { ar: 'تم إعادة إرسال الرمز بنجاح!', en: 'Code resent successfully!' },
        first_name: { ar: 'الاسم الأول', en: 'First Name' },
        last_name: { ar: 'اسم العائلة', en: 'Last Name' },
        role_individual: { ar: 'حساب فردي', en: 'Individual' },
        role_hospital: { ar: 'حساب مستشفى', en: 'Hospital' },
        phone_invalid_msg: { ar: 'رقم الهاتف غير صالح لهذه الدولة', en: 'Invalid phone number for this country' },
    };

    // ==========================================
    // 2. دوال المساعدة العامة (Global Helper Functions)
    // ==========================================
    function showToast(messageObj, type = 'success') {
        const toastEl = document.getElementById('appToast');
        if (!toastEl) return;

        const currentLang = document.documentElement.getAttribute('lang') || 'ar';
        const messageText = typeof messageObj === 'string' ? messageObj : messageObj[currentLang];
        const toastMessage = document.getElementById('toastMessage');
        const icon = type === 'success' ? '<i class="fa-solid fa-circle-check me-2"></i>' : '<i class="fa-solid fa-triangle-exclamation me-2"></i>';

        toastMessage.innerHTML = icon + messageText;
        toastEl.classList.remove('bg-success', 'bg-danger');
        toastEl.classList.add(type === 'success' ? 'bg-success' : 'bg-danger');

        const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
        toast.show();
    }

    function showLoadingState(btn, textEl, loaderEl) {
        textEl.style.opacity = '0';
        loaderEl.classList.remove('d-none');
        btn.setAttribute('disabled', 'true');
        btn.style.cursor = 'not-allowed';
    }

    function hideLoadingState(btn, textEl, loaderEl) {
        textEl.style.opacity = '1';
        loaderEl.classList.add('d-none');
        btn.removeAttribute('disabled');
        btn.style.cursor = 'pointer';
    }

    function shakeInvalidInputs(form) {
        const invalidInputs = form.querySelectorAll(':invalid');
        invalidInputs.forEach(input => {
            input.classList.remove('shake-anim');
            void input.offsetWidth; // Trigger reflow
            input.classList.add('shake-anim');
        });
    }

    function applyLanguage(lang) {
        const htmlEl = document.documentElement;
        const langToggle = document.getElementById('langToggle');
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        if (langToggle) langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';

        const bsLink = document.getElementById('bootstrapCss');
        if (bsLink) {
            bsLink.href = lang === 'ar'
                ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css'
                : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                el.textContent = translations[key][lang];
            }
        });

        // الجزء الجديد: ترجمة הـ placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[key] && translations[key][lang]) {
                el.setAttribute('placeholder', translations[key][lang]);
            }
        });
    }

    // ==========================================
    // 3. إعدادات الواجهة (Theme, Lang, Password Toggle)
    // ==========================================
    const htmlEl = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');

    // استرجاع الإعدادات
    const savedTheme = localStorage.getItem('fazaa_theme') || 'light';
    const savedLang = localStorage.getItem('fazaa_lang') || 'ar';

    htmlEl.setAttribute('data-theme', savedTheme);
    if (themeToggle) themeToggle.innerHTML = savedTheme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    applyLanguage(savedLang);

    // أحداث تغيير اللغة والسمة
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            htmlEl.setAttribute('data-theme', newTheme);
            themeToggle.innerHTML = newTheme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('fazaa_theme', newTheme);
        });
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = htmlEl.getAttribute('lang') === 'ar' ? 'en' : 'ar';
            applyLanguage(newLang);
            localStorage.setItem('fazaa_lang', newLang);
        });
    }

    // إظهار/إخفاء كلمة المرور
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.closest('.position-relative').querySelector('input');
            const icon = this.querySelector('i');
            if (input) {
                const isPassword = input.getAttribute('type') === 'password';
                input.setAttribute('type', isPassword ? 'text' : 'password');
                icon.className = isPassword ? 'fa-regular fa-eye-slash pt-1 text-danger' : 'fa-regular fa-eye pt-1 text-muted';
            }
        });
    });

    // تأثير التركيز للحقول (Ripple Effect)
    document.querySelectorAll('.premium-input').forEach(input => {
        input.addEventListener('focus', function () { this.parentElement.classList.add('input-focused'); });
        input.addEventListener('blur', function () { this.parentElement.classList.remove('input-focused'); });
    });

    // ==========================================
    // 4. منطق صفحة تسجيل الدخول (Login & Forgot Password)
    // ==========================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const loginBtn = document.getElementById('loginBtn');
        const btnText = loginBtn.querySelector('.btn-text');
        const btnLoader = document.getElementById('btnLoader');

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (loginForm.checkValidity()) {
                showLoadingState(loginBtn, btnText, btnLoader);
                setTimeout(() => {
                    hideLoadingState(loginBtn, btnText, btnLoader);
                    showToast({ ar: 'تم تسجيل الدخول بنجاح! جاري التوجيه...', en: 'Login successful! Redirecting...' }, 'success');
                }, 1500);
            } else {
                shakeInvalidInputs(loginForm);
                showToast({ ar: 'يرجى التأكد من إدخال البيانات بشكل صحيح.', en: 'Please ensure all fields are entered correctly.' }, 'error');
            }
            loginForm.classList.add('was-validated');
        });
    }

    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        const resetBtn = document.getElementById('resetBtn');
        const btnText = resetBtn.querySelector('.btn-text');
        const btnLoader = document.getElementById('resetBtnLoader');

        forgotPasswordForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (forgotPasswordForm.checkValidity()) {
                showLoadingState(resetBtn, btnText, btnLoader);
                setTimeout(() => {
                    hideLoadingState(resetBtn, btnText, btnLoader);
                    const modal = bootstrap.Modal.getInstance(document.getElementById('forgotPasswordModal')) || new bootstrap.Modal(document.getElementById('forgotPasswordModal'));
                    modal.hide();
                    showToast({ ar: 'تم إرسال رابط الاستعادة إلى بريدك الإلكتروني بنجاح.', en: 'Reset link sent to your email successfully.' }, 'success');
                    forgotPasswordForm.reset();
                    forgotPasswordForm.classList.remove('was-validated');
                }, 1500);
            } else {
                shakeInvalidInputs(forgotPasswordForm);
            }
            forgotPasswordForm.classList.add('was-validated');
        });
    }

    // تسجيل الدخول الاجتماعي
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const originalHTML = this.innerHTML;
            this.style.width = this.offsetWidth + 'px';
            this.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
            this.setAttribute('disabled', 'true');
            this.style.cursor = 'not-allowed';

            setTimeout(() => {
                this.innerHTML = '<i class="fa-solid fa-check me-2"></i><span class="fw-bold">' + (document.documentElement.lang === 'en' ? 'Verified' : 'تم بنجاح') + '</span>';
                this.className = 'btn social-btn w-100 d-flex align-items-center justify-content-center gap-3 py-2 shadow-sm rounded-3 btn-success text-white';
                this.style.cssText = 'background-color: #198754 !important; border-color: #198754 !important; color: #fff !important; cursor: not-allowed;';

                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.removeAttribute('disabled');
                    this.className = 'btn btn-light border-0 social-btn w-100 d-flex align-items-center justify-content-center gap-3 py-2 shadow-sm rounded-3';
                    this.style.cssText = 'cursor: pointer; width: 100%;';
                    showToast({ ar: 'تم التحقق من الحساب الجانبي بنجاح.', en: 'Social account verified successfully.' }, 'success');
                }, 1500);
            }, 1200);
        });
    });

    // ==========================================
    // 5. منطق صفحة إنشاء الحساب (Registration Logic)
    // ==========================================
    const registerForm = document.getElementById('registerForm');

    // إعدادات الحقول الديناميكية (نوع المستخدم)
    if (registerForm) {
        document.querySelectorAll('input[name="userRole"]').forEach(radio => {
            radio.addEventListener('change', function () {
                const hospitalFieldsSection = document.getElementById('hospitalFields');
                if (!hospitalFieldsSection) return; // الحماية من الأخطاء إذا لم يوجد القسم

                const hospitalInputs = hospitalFieldsSection.querySelectorAll('input');

                if (this.value === 'hospital') {
                    hospitalFieldsSection.classList.add('active');
                    hospitalInputs.forEach(inp => inp.setAttribute('required', 'true'));
                } else {
                    hospitalFieldsSection.classList.remove('active');
                    hospitalInputs.forEach(inp => {
                        inp.removeAttribute('required');
                        inp.value = '';
                        inp.classList.remove('is-valid', 'is-invalid');
                    });
                }
                if (typeof updateProgress === 'function') updateProgress();
            });
        });

        // تشغيل الحدث الافتراضي عند التحميل
        if (document.querySelector('input[name="userRole"]:checked')) {
            document.querySelector('input[name="userRole"]:checked').dispatchEvent(new Event('change'));
        }

        // قيود إدخال إضافية
        const lastDonationInput = document.getElementById('lastDonation');
        if (lastDonationInput) lastDonationInput.setAttribute('max', new Date().toISOString().split('T')[0]);

        const phoneInput = document.getElementById('phoneInput');
        // قيود إدخال رقم الهاتف (يبدأ بـ 07 و 10 أرقام)
        // قيود إدخال رقم الهاتف (الأردن: يبدأ بـ 07 ثم 7,8,9 والمجموع 10 أرقام)
        if (phoneInput) {
            phoneInput.addEventListener('input', function () {
                // 1. السماح بالأرقام فقط
                this.value = this.value.replace(/[^0-9]/g, '');

                // 2. التحقق المخفي من النمط (بدون إزعاج المستخدم بالتفاصيل)
                const phoneRegex = /^07[789][0-9]{7}$/;
                const currentLang = document.documentElement.getAttribute('lang') || 'ar';

                if (this.value.length > 0 && !phoneRegex.test(this.value)) {
                    // رسالة الخطأ تبقى عامة
                    this.setCustomValidity(currentLang === 'en' ? "Please enter a valid phone number" : "يرجى إدخال رقم هاتف صحيح (يبدأ بـ 07)");
                } else {
                    this.setCustomValidity(""); // الإدخال صحيح تماماً
                }
            });
        }
        // شروط وقوة كلمة المرور
        const regPasswordInput = document.getElementById('regPasswordInput');
        const confirmPasswordInput = document.getElementById('confirmPasswordInput');

        function validatePasswordMatch() {
            if (!confirmPasswordInput) return;
            const currentLang = document.documentElement.getAttribute('lang') || 'ar';
            if (regPasswordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.setCustomValidity(currentLang === 'en' ? "Passwords do not match" : "كلمات المرور غير متطابقة");
            } else {
                confirmPasswordInput.setCustomValidity("");
            }
        }

        if (regPasswordInput) {
            const reqs = {
                length: document.getElementById('reqLength'),
                upper: document.getElementById('reqUpper'),
                number: document.getElementById('reqNumber'),
                symbol: document.getElementById('reqSymbol')
            };

            regPasswordInput.addEventListener('input', function () {
                this.value = this.value.replace(/[\u0600-\u06FF]/g, ''); // منع العربية
                const val = this.value;
                let strength = 0;
                document.getElementById('passwordRequirements').style.display = val.length > 0 ? 'block' : 'none';

                // فحص الشروط
                const checkReq = (condition, el) => {
                    if (condition) { el.classList.replace('text-danger', 'text-success'); strength++; }
                    else { el.classList.replace('text-success', 'text-danger'); }
                };

                checkReq(val.length >= 6, reqs.length);
                checkReq(/[A-Z]/.test(val), reqs.upper);
                checkReq(/[0-9]/.test(val) && /[a-zA-Z]/.test(val), reqs.number);
                checkReq(/[!@#$%^&*(),.?":{}|<>]/.test(val), reqs.symbol);

                // تحديث الشريط والنص
                const sBar = document.getElementById('strengthBar');
                const sText = document.getElementById('strengthText');
                sBar.className = 'password-strength-bar';
                sText.className = 'strength-text';

                if (val.length === 0) {
                    sBar.style.width = '0'; sText.textContent = ''; sText.removeAttribute('data-i18n');
                } else if (strength <= 1) {
                    sBar.classList.add('strength-weak'); sText.classList.add('text-weak'); sText.setAttribute('data-i18n', 'strength_weak'); sText.textContent = 'ضعيفة';
                } else if (strength <= 3) {
                    sBar.classList.add('strength-medium'); sText.classList.add('text-medium'); sText.setAttribute('data-i18n', 'strength_medium'); sText.textContent = 'متوسطة';
                } else {
                    sBar.classList.add('strength-strong'); sText.classList.add('text-strong'); sText.setAttribute('data-i18n', 'strength_strong'); sText.textContent = 'قوية';
                }

                validatePasswordMatch();
                if (typeof updateProgress === 'function') updateProgress();
                applyLanguage(document.documentElement.getAttribute('lang')); // تحديث لغة النص الجديد
            });
        }

        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', () => { validatePasswordMatch(); if (typeof updateProgress === 'function') updateProgress(); });
        }

        // شريط التقدم التفاعلي
        function updateProgress() {
            const allReq = Array.from(registerForm.querySelectorAll('input[required], select[required]'));
            if (allReq.length === 0) return;
            const valid = allReq.filter(el => el.checkValidity());
            const bar = document.getElementById('regProgressBar');
            if (bar) bar.style.width = (valid.length / allReq.length) * 100 + '%';
        }

        registerForm.querySelectorAll('input, select').forEach(el => {
            el.addEventListener('input', () => {
                updateProgress();
                el.classList.toggle('is-valid', el.value.trim().length > 0 && el.checkValidity());
                el.classList.toggle('is-invalid', el.value.trim().length > 0 && !el.checkValidity());
            });
            el.addEventListener('change', updateProgress);
        });
        setTimeout(updateProgress, 100);

        // إرسال نموذج التسجيل (فتح الـ OTP)
        registerForm.addEventListener('submit', function (event) {
            validatePasswordMatch();
            event.preventDefault();

            if (registerForm.checkValidity()) {
                const regBtn = document.getElementById('regBtn');
                showLoadingState(regBtn, regBtn.querySelector('.btn-text'), document.getElementById('regBtnLoader'));

                setTimeout(() => {
                    hideLoadingState(regBtn, regBtn.querySelector('.btn-text'), document.getElementById('regBtnLoader'));
                    const displayEmailEl = document.getElementById('displayUserEmail');
                    if (displayEmailEl) displayEmailEl.textContent = registerForm.querySelector('input[type="email"]').value;

                    const otpModalEl = document.getElementById('otpModal');
                    if (otpModalEl) {
                        new bootstrap.Modal(otpModalEl).show();
                        if (typeof window.startResendTimer === 'function') window.startResendTimer();
                        setTimeout(() => document.querySelector('.otp-input').focus(), 500);
                    }
                }, 1500);
            } else {
                shakeInvalidInputs(registerForm);
                showToast({ ar: 'يرجى إكمال جميع الحقول المطلوبة بشكل صحيح.', en: 'Please complete all required fields correctly.' }, 'error');
            }
            registerForm.classList.add('was-validated');
        });
    }

    // ==========================================
    // 6. منطق نافذة التحقق (OTP) والعداد الزمني
    // ==========================================
    const otpInputs = document.querySelectorAll('.otp-input');
    if (otpInputs.length > 0) {
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', function () {
                this.value = this.value.replace(/[^0-9]/g, '');
                if (this.value !== '' && index < otpInputs.length - 1) {
                    otpInputs[index + 1].removeAttribute('disabled');
                    otpInputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', function (e) {
                if (e.key === 'Backspace' && this.value === '' && index > 0) {
                    otpInputs[index - 1].focus();
                    otpInputs[index - 1].value = '';
                }
            });
        });

        const otpForm = document.getElementById('otpForm');
        if (otpForm) {
            otpForm.addEventListener('submit', function (e) {
                e.preventDefault();
                if (Array.from(otpInputs).every(input => input.value !== '')) {
                    const verifyBtn = document.getElementById('verifyOtpBtn');
                    showLoadingState(verifyBtn, verifyBtn.querySelector('.btn-text'), document.getElementById('otpBtnLoader'));
                    setTimeout(() => {
                        hideLoadingState(verifyBtn, verifyBtn.querySelector('.btn-text'), document.getElementById('otpBtnLoader'));
                        bootstrap.Modal.getInstance(document.getElementById('otpModal')).hide();
                        showToast({ ar: 'تم إنشاء وتوثيق الحساب بنجاح! مرحباً بك.', en: 'Account created & verified successfully! Welcome.' }, 'success');
                    }, 1500);
                } else {
                    shakeInvalidInputs(otpForm);
                }
            });
        }
    }

    const resendOtpBtn = document.getElementById('resendOtpBtn');
    const resendTimer = document.getElementById('resendTimer');
    let countdownInterval;

    window.startResendTimer = function () {
        if (!resendOtpBtn || !resendTimer) return;
        let seconds = 60;
        resendOtpBtn.setAttribute('disabled', 'true');
        resendOtpBtn.style.color = 'gray';
        resendTimer.classList.remove('d-none');
        resendTimer.textContent = `(${seconds}s)`;

        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
            seconds--;
            resendTimer.textContent = `(${seconds}s)`;
            if (seconds <= 0) {
                clearInterval(countdownInterval);
                resendOtpBtn.removeAttribute('disabled');
                resendOtpBtn.style.color = '';
                resendTimer.classList.add('d-none');
            }
        }, 1000);
    };

    if (resendOtpBtn) {
        resendOtpBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (!this.hasAttribute('disabled')) {
                window.startResendTimer();
                showToast({ ar: 'تم إعادة إرسال الرمز بنجاح!', en: 'Code resent successfully!' }, 'success');
                document.querySelectorAll('.otp-input').forEach((input, index) => {
                    input.value = '';
                    index === 0 ? (input.removeAttribute('disabled'), input.focus()) : input.setAttribute('disabled', 'true');
                });
            }
        });
    }
    // تفعيل مكتبة رقم الهاتف الدولي (Intl-Tel-Input)
    const phoneInputEl = document.querySelector("#phoneInput");
    let iti;
    if (phoneInputEl) {
        iti = window.intlTelInput(phoneInputEl, {
            initialCountry: "jo",
            preferredCountries: ["jo", "ps", "sa", "ae", "eg", "iq", "sy"],
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.6/build/js/utils.js",
            separateDialCode: true,
            autoPlaceholder: "off"
        });

        const errorMsg = document.querySelector("#phoneErrorMsg");

        // دالة التحقق الذكية (مدمجة)
        const validatePhone = () => {
            const val = phoneInputEl.value.trim();
            if (val) {
                const countryData = iti.getSelectedCountryData();
                let isValid = false;

                // 🔴 فحص مخصص وصارم للأردن فقط (يمنع 075 وأخواتها)
                if (countryData.iso2 === 'jo') {
                    // يقبل الرقم سواء بدأ بـ 079 أو 79 مباشرة، ويشترط أن يتبعه 7 أرقام
                    const joRegex = /^(07[789]\d{7}|[789]\d{7})$/;
                    isValid = joRegex.test(val);
                } else {
                    // باقي دول العالم تعتمد على فحص المكتبة
                    isValid = iti.isValidNumber();
                }

                // تطبيق الألوان والرسائل بناءً على النتيجة
                if (isValid) {
                    phoneInputEl.classList.remove("is-invalid");
                    phoneInputEl.classList.add("is-valid");
                    errorMsg.classList.add("d-none");
                    phoneInputEl.setCustomValidity("");
                } else {
                    phoneInputEl.classList.remove("is-valid");
                    phoneInputEl.classList.add("is-invalid");
                    errorMsg.classList.remove("d-none");
                    phoneInputEl.setCustomValidity("Invalid phone number"); // يمنع إرسال الفورم
                }
            } else {
                phoneInputEl.classList.remove("is-valid", "is-invalid");
                errorMsg.classList.add("d-none");
            }
        };

        // 🔴 نظام المنع الصارم المخصص (Custom Strict Mode)
        phoneInputEl.addEventListener('input', function () {
            // 1. منع إدخال أي شيء غير الأرقام نهائياً
            this.value = this.value.replace(/[^0-9]/g, '');

            // 2. سؤال المكتبة عن طول الرقم وقصه إذا كان أطول من المسموح
            if (typeof window.intlTelInputUtils !== 'undefined') {
                const errorCode = iti.getValidationError();

                // رمز الخطأ 3 (TOO_LONG) يعني أن الرقم تجاوز الحد الأقصى للدولة
                if (errorCode === window.intlTelInputUtils.validationError.TOO_LONG) {
                    this.value = this.value.slice(0, -1); // مسح الرقم الأخير فوراً قبل أن يراه المستخدم
                }
            }

            validatePhone();
        });

        // تفريغ الحقل عند تغيير الدولة لتجنب تداخل الأرقام
        phoneInputEl.addEventListener('countrychange', () => {
            phoneInputEl.value = '';
            validatePhone();
        });
    }
});