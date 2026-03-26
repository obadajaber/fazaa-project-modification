document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // 0. Language & Theme Toggles with LocalStorage
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    const htmlEl = document.documentElement;

    // قاموس الترجمة
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
        social_apple: { ar: 'المتابعة باستخدام Apple', en: 'Continue with Apple' },
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
        // أضف هذه السطور الأربعة الجديدة هنا
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
    };

    // دالة تطبيق الترجمة وإعدادات البوتستراب
    function applyLanguage(lang) {
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
    }

    // استرجاع الإعدادات المحفوظة عند تحميل الصفحة
    const savedTheme = localStorage.getItem('fazaa_theme') || 'light';
    const savedLang = localStorage.getItem('fazaa_lang') || 'ar';

    // تطبيق السمة المحفوظة
    htmlEl.setAttribute('data-theme', savedTheme);
    if (themeToggle) {
        themeToggle.innerHTML = savedTheme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    }

    // تطبيق اللغة المحفوظة
    applyLanguage(savedLang);

    // حدث النقر لتغيير السمة وحفظها
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlEl.setAttribute('data-theme', newTheme);
            themeToggle.innerHTML = newTheme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('fazaa_theme', newTheme); // حفظ في الذاكرة
        });
    }

    // حدث النقر لتغيير اللغة وحفظها
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = htmlEl.getAttribute('lang');
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            applyLanguage(newLang);
            localStorage.setItem('fazaa_lang', newLang); // حفظ في الذاكرة
        });
    }

    // ==========================================
    // 1. Password Visibility Toggle (الباقي كما هو في ملفك)

    // ==========================================
    // 1. Password Visibility Toggle
    // ==========================================
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const container = this.closest('.position-relative');
            const input = container.querySelector('input');
            const icon = this.querySelector('i');

            if (input) {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);

                if (type === 'text') {
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                    icon.classList.remove('text-muted');
                    icon.classList.add('text-danger');
                } else {
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                    icon.classList.remove('text-danger');
                    icon.classList.add('text-muted');
                }
            }
        });
    });

    // ==========================================
    // 2. Ripple / Focus Effects
    // ==========================================
    const inputs = document.querySelectorAll('.premium-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('input-focused');
        });
        input.addEventListener('blur', function () {
            this.parentElement.classList.remove('input-focused');
        });
    });

    // ==========================================
    // 3. Input Validation Features
    // ==========================================
    const lastDonationInput = document.getElementById('lastDonation');
    if (lastDonationInput) {
        const today = new Date().toISOString().split('T')[0];
        lastDonationInput.setAttribute('max', today);
    }

    const phoneInput = document.getElementById('phoneInput');
    if (phoneInput) {
        phoneInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9+]/g, '');
        });
    }

    // ==========================================
    // 4. Login Page Logic
    // ==========================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const loginBtn = document.getElementById('loginBtn');
        const btnText = loginBtn.querySelector('.btn-text');
        const btnLoader = document.getElementById('btnLoader');

        // ==========================================
        // 8. Forgot Password Logic
        // ==========================================
        const forgotPasswordForm = document.getElementById('forgotPasswordForm');
        if (forgotPasswordForm) {
            const resetBtn = document.getElementById('resetBtn');
            const btnText = resetBtn.querySelector('.btn-text');
            const btnLoader = document.getElementById('resetBtnLoader');

            forgotPasswordForm.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (forgotPasswordForm.checkValidity()) {
                    showLoadingState(resetBtn, btnText, btnLoader);
                    setTimeout(() => {
                        hideLoadingState(resetBtn, btnText, btnLoader);

                        // إغلاق النافذة المنبثقة
                        const modalEl = document.getElementById('forgotPasswordModal');
                        const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
                        modal.hide();

                        // إظهار إشعار النجاح وتفريغ الحقل
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

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

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

    // ==========================================
    // 5. Registration Page Logic
    // ==========================================
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        const regBtn = document.getElementById('regBtn');
        const btnText = regBtn.querySelector('.btn-text');
        const regBtnLoader = document.getElementById('regBtnLoader');

        const roleRadios = document.querySelectorAll('input[name="userRole"]');
        const dynamicSections = document.querySelectorAll('.dynamic-fields-section');

        roleRadios.forEach(radio => {
            radio.addEventListener('change', function () {
                dynamicSections.forEach(section => {
                    section.classList.remove('active');
                    const requiredInputs = section.querySelectorAll('input, select');
                    requiredInputs.forEach(inp => inp.removeAttribute('required'));
                });

                const selectedRole = this.value;
                let targetSectionId = '';

                if (selectedRole === 'donor') targetSectionId = 'donorFields';
                else if (selectedRole === 'patient') targetSectionId = 'patientFields';
                else if (selectedRole === 'hospital') targetSectionId = 'hospitalFields';

                if (targetSectionId) {
                    const targetSection = document.getElementById(targetSectionId);
                    if (targetSection) {
                        targetSection.classList.add('active');
                        const requiredInputs = targetSection.querySelectorAll('input, select');
                        requiredInputs.forEach(inp => inp.setAttribute('required', 'true'));

                        setTimeout(() => {
                            if (window.innerWidth <= 768) {
                                targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        }, 150);
                    }
                }
                if (typeof updateProgress === 'function') updateProgress();
            });
        });

        if (document.querySelector('input[name="userRole"]:checked')) {
            document.querySelector('input[name="userRole"]:checked').dispatchEvent(new Event('change'));
        }

        // Password Strength Meter & Requirements
        const regPasswordInput = document.getElementById('regPasswordInput');
        const strengthBar = document.getElementById('strengthBar');
        const strengthText = document.getElementById('strengthText');
        const confirmPasswordInput = document.getElementById('confirmPasswordInput');

        // جلب عناصر قائمة الشروط التي أضفناها في HTML
        const passwordRequirements = document.getElementById('passwordRequirements');
        const reqLength = document.getElementById('reqLength');
        const reqUpper = document.getElementById('reqUpper');
        const reqNumber = document.getElementById('reqNumber');
        const reqSymbol = document.getElementById('reqSymbol');

        if (regPasswordInput) {
            regPasswordInput.addEventListener('input', function (e) {
                // 1. المنع القاطع لكتابة أي حرف باللغة العربية
                const arabicRegex = /[\u0600-\u06FF]/g;
                if (arabicRegex.test(this.value)) {
                    this.value = this.value.replace(arabicRegex, ''); // يمسح الحرف العربي فور كتابته
                }

                const val = this.value;
                let strength = 0; // عداد الشروط المحققة (من 0 إلى 4)
                const currentLang = document.documentElement.getAttribute('lang') || 'ar';

                // إظهار قائمة الشروط بمجرد بدء الكتابة
                if (val.length > 0) {
                    passwordRequirements.style.display = 'block';
                } else {
                    passwordRequirements.style.display = 'none';
                }

                // --- فحص الشروط واحداً تلو الآخر وتغيير الألوان ---

                // الشرط الأول: 6 أحرف على الأقل
                if (val.length >= 6) {
                    reqLength.classList.replace('text-danger', 'text-success');
                    strength++;
                } else {
                    reqLength.classList.replace('text-success', 'text-danger');
                }

                // الشرط الثاني: حرف إنجليزي كبير
                if (/[A-Z]/.test(val)) {
                    reqUpper.classList.replace('text-danger', 'text-success');
                    strength++;
                } else {
                    reqUpper.classList.replace('text-success', 'text-danger');
                }

                // الشرط الثالث: أرقام وأحرف معاً
                if (/[0-9]/.test(val) && /[a-zA-Z]/.test(val)) {
                    reqNumber.classList.replace('text-danger', 'text-success');
                    strength++;
                } else {
                    reqNumber.classList.replace('text-success', 'text-danger');
                }

                // الشرط الرابع: رمز خاص
                if (/[!@#$%^&*(),.?":{}|<>]/.test(val)) {
                    reqSymbol.classList.replace('text-danger', 'text-success');
                    strength++;
                } else {
                    reqSymbol.classList.replace('text-success', 'text-danger');
                }

                // --- تحديث الشريط بناءً على عداد الشروط ---

                strengthBar.className = 'password-strength-bar';
                strengthText.className = 'strength-text';

                if (val.length === 0) {
                    strengthBar.style.width = '0';
                    strengthText.textContent = '';
                    strengthText.removeAttribute('data-i18n');
                } else if (strength <= 1) {
                    // إذا تحقق شرط واحد أو لا شيء -> ضعيفة (شريط أحمر قصير)
                    strengthBar.classList.add('strength-weak');
                    strengthText.classList.add('text-weak');
                    strengthText.setAttribute('data-i18n', 'strength_weak');
                    strengthText.textContent = currentLang === 'en' ? 'Weak' : 'ضعيفة';
                } else if (strength === 2 || strength === 3) {
                    // إذا تحقق شرطان أو ثلاثة -> متوسطة (شريط أصفر متوسط)
                    strengthBar.classList.add('strength-medium');
                    strengthText.classList.add('text-medium');
                    strengthText.setAttribute('data-i18n', 'strength_medium');
                    strengthText.textContent = currentLang === 'en' ? 'Medium' : 'متوسطة';
                } else if (strength === 4) {
                    // إذا تحققت الشروط الأربعة -> قوية (شريط أخضر كامل)
                    strengthBar.classList.add('strength-strong');
                    strengthText.classList.add('text-strong');
                    strengthText.setAttribute('data-i18n', 'strength_strong');
                    strengthText.textContent = currentLang === 'en' ? 'Strong' : 'قوية';
                }

                if (confirmPasswordInput && confirmPasswordInput.value.length > 0) {
                    validatePasswordMatch();
                }
                if (typeof updateProgress === 'function') updateProgress();
            });
        }

        function validatePasswordMatch() {
            const currentLang = document.documentElement.getAttribute('lang') || 'ar';
            if (regPasswordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.setCustomValidity(currentLang === 'en' ? "Passwords do not match" : "كلمات المرور غير متطابقة");
            } else {
                confirmPasswordInput.setCustomValidity("");
            }
        }

        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', () => {
                validatePasswordMatch();
                if (typeof updateProgress === 'function') updateProgress();
            });
        }

        // Interactive Progress Bar
        const bar = document.getElementById('regProgressBar');
        function updateProgress() {
            const allRequired = Array.from(registerForm.querySelectorAll('input[required], select[required]'));
            if (allRequired.length === 0) return;
            const validInputs = allRequired.filter(el => el.checkValidity());
            const percent = (validInputs.length / allRequired.length) * 100;
            if (bar) bar.style.width = percent + '%';
        }

        registerForm.querySelectorAll('input, select').forEach(el => {
            el.addEventListener('input', () => {
                updateProgress();
                if (el.value.trim().length > 0) {
                    if (el.checkValidity()) {
                        el.classList.add('is-valid');
                        el.classList.remove('is-invalid');
                    } else {
                        el.classList.add('is-invalid');
                        el.classList.remove('is-valid');
                    }
                } else {
                    el.classList.remove('is-valid', 'is-invalid');
                }
            });
            el.addEventListener('change', updateProgress);
        });

        setTimeout(updateProgress, 100);

        // Form Submit (تحديث لفتح نافذة OTP)
        registerForm.addEventListener('submit', function (event) {
            validatePasswordMatch();

            event.preventDefault();
            event.stopPropagation();

            if (registerForm.checkValidity()) {
                showLoadingState(regBtn, btnText, regBtnLoader);
                setTimeout(() => {
                    hideLoadingState(regBtn, btnText, regBtnLoader);
                    // جلب الإيميل الذي كتبه المستخدم وعرضه في النافذة
                    const userEmail = registerForm.querySelector('input[type="email"]').value;
                    const displayEmailEl = document.getElementById('displayUserEmail');
                    if (displayEmailEl) displayEmailEl.textContent = userEmail;
                    // فتح نافذة التحقق OTP بدلاً من الإشعار العادي
                    const otpModalEl = document.getElementById('otpModal');
                    if (otpModalEl) {
                        const otpModal = new bootstrap.Modal(otpModalEl);
                        if (typeof window.startResendTimer === 'function') window.startResendTimer();
                        otpModal.show();

                        // التركيز على أول مربع تلقائياً
                        setTimeout(() => document.querySelector('.otp-input').focus(), 500);
                    }
                }, 1500);
            } else {
                shakeInvalidInputs(registerForm);

                // ==========================================
                // 9. OTP Input Logic (التنقل الذكي بين المربعات)
                // ==========================================
                const otpInputs = document.querySelectorAll('.otp-input');
                if (otpInputs.length > 0) {
                    otpInputs.forEach((input, index) => {
                        input.addEventListener('input', function () {
                            // التأكد من إدخال أرقام فقط
                            this.value = this.value.replace(/[^0-9]/g, '');

                            // الانتقال للمربع التالي فور كتابة الرقم
                            if (this.value !== '') {
                                if (index < otpInputs.length - 1) {
                                    otpInputs[index + 1].removeAttribute('disabled');
                                    otpInputs[index + 1].focus();
                                }
                            }
                        });

                        // الرجوع للمربع السابق عند ضغط Backspace
                        input.addEventListener('keydown', function (e) {
                            if (e.key === 'Backspace' && this.value === '') {
                                if (index > 0) {
                                    otpInputs[index - 1].focus();
                                    otpInputs[index - 1].value = '';
                                }
                            }
                        });
                    });

                    // زر التحقق النهائي
                    const otpForm = document.getElementById('otpForm');
                    if (otpForm) {
                        const verifyBtn = document.getElementById('verifyOtpBtn');
                        const vBtnText = verifyBtn.querySelector('.btn-text');
                        const vBtnLoader = document.getElementById('otpBtnLoader');

                        otpForm.addEventListener('submit', function (e) {
                            e.preventDefault();
                            let isValid = Array.from(otpInputs).every(input => input.value !== '');

                            if (isValid) {
                                showLoadingState(verifyBtn, vBtnText, vBtnLoader);
                                setTimeout(() => {
                                    hideLoadingState(verifyBtn, vBtnText, vBtnLoader);
                                    const modal = bootstrap.Modal.getInstance(document.getElementById('otpModal'));
                                    modal.hide();
                                    showToast({ ar: 'تم إنشاء وتوثيق الحساب بنجاح! مرحباً بك.', en: 'Account created & verified successfully! Welcome.' }, 'success');

                                    // هنا يتم نقل المستخدم لاحقاً للوحة التحكم 
                                    // window.location.href = "dashboard.html";
                                }, 1500);
                            } else {
                                shakeInvalidInputs(otpForm);
                            }
                        });
                    }
                }

                showToast({ ar: 'يرجى إكمال جميع الحقول المطلوبة بشكل صحيح.', en: 'Please complete all required fields correctly.' }, 'error');
            }
            registerForm.classList.add('was-validated');
        });
    }

    // ==========================================
    // 6. Social Login Logic
    // ==========================================
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const originalHTML = this.innerHTML;
            const originalWidth = this.offsetWidth;

            this.style.width = originalWidth + 'px';
            this.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
            this.setAttribute('disabled', 'true');
            this.style.cursor = 'not-allowed';

            setTimeout(() => {
                this.innerHTML = '<i class="fa-solid fa-check me-2"></i><span class="fw-bold">' + (document.documentElement.lang === 'en' ? 'Verified' : 'تم بنجاح') + '</span>';
                this.classList.add('btn-success', 'text-white');
                this.style.backgroundColor = '#198754';
                this.style.borderColor = '#198754';
                this.style.color = '#fff';

                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.removeAttribute('disabled');
                    this.classList.remove('btn-success', 'text-white');
                    this.style.cursor = 'pointer';
                    this.style.backgroundColor = '';
                    this.style.color = '';
                    this.style.borderColor = '';
                    this.style.width = '100%';

                    showToast({ ar: 'تم التحقق من الحساب الجانبي بنجاح.', en: 'Social account verified successfully.' }, 'success');
                }, 1500);
            }, 1200);
        });
    });

    // ==========================================
    // 7. Global Helper Functions
    // ==========================================

    // دالة الإشعارات الآن تدعم اللغتين وتفحص لغة الصفحة الحالية
    function showToast(messageObj, type = 'success') {
        const toastEl = document.getElementById('appToast');
        if (!toastEl) return;

        // جلب اللغة الحالية
        const currentLang = document.documentElement.getAttribute('lang') || 'ar';

        // إذا كان النص الممرر هو كائن (يحتوي على لغتين)، نختار اللغة الحالية
        const messageText = typeof messageObj === 'string' ? messageObj : messageObj[currentLang];

        const toastMessage = document.getElementById('toastMessage');
        const icon = type === 'success' ? '<i class="fa-solid fa-circle-check me-2"></i>' : '<i class="fa-solid fa-triangle-exclamation me-2"></i>';

        toastMessage.innerHTML = icon + messageText;

        toastEl.classList.remove('bg-success', 'bg-danger');

        if (type === 'success') {
            toastEl.classList.add('bg-success');
        } else {
            toastEl.classList.add('bg-danger');
        }

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
    // ==========================================
    // 10. OTP Resend Timer Logic (عداد الإرسال)
    // ==========================================
    const resendOtpBtn = document.getElementById('resendOtpBtn');
    const resendTimer = document.getElementById('resendTimer');
    let countdownInterval;

    // دالة تشغيل العداد
    window.startResendTimer = function () {
        if (!resendOtpBtn || !resendTimer) return;

        let seconds = 60; // 60 ثانية
        resendOtpBtn.setAttribute('disabled', 'true'); // تعطيل الزر
        resendOtpBtn.style.color = 'gray'; // تغيير لونه للرمادي
        resendTimer.classList.remove('d-none');
        resendTimer.textContent = `(${seconds}s)`;

        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
            seconds--;
            resendTimer.textContent = `(${seconds}s)`;
            if (seconds <= 0) {
                clearInterval(countdownInterval);
                resendOtpBtn.removeAttribute('disabled'); // تفعيل الزر مجدداً
                resendOtpBtn.style.color = ''; // إعادة لونه الأصلي
                resendTimer.classList.add('d-none'); // إخفاء العداد
            }
        }, 1000);
    };

    // برمجة النقر على زر إعادة الإرسال
    if (resendOtpBtn) {
        resendOtpBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (!this.hasAttribute('disabled')) {
                window.startResendTimer(); // تشغيل العداد من جديد
                showToast({ ar: 'تم إعادة إرسال الرمز بنجاح!', en: 'Code resent successfully!' }, 'success'); // إشعار النجاح

                // تصفير المربعات ليدخل الرمز الجديد
                const otpInputs = document.querySelectorAll('.otp-input');
                otpInputs.forEach((input, index) => {
                    input.value = '';
                    if (index === 0) {
                        input.removeAttribute('disabled');
                        input.focus();
                    } else {
                        input.setAttribute('disabled', 'true');
                    }
                });
            }
        });
    }
});