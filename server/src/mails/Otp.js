import CONTENT from '../config/Content.js';

const Otp = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>{{ $subject }} | ${CONTENT.NAME.LONG}</title>
                <style>
                *{font-family: 'Helvetica'}.w-50{width: 50% !important;}.w-75{width: 75% !important;}.d-block{display:block}.d-flex{display:flex}.justify-content-center{justify-content:center}.text-center{text-align:center}.text-justify{text-align:justify;text-justify:inter-word}.text-decoration-none{text-decoration:none!important}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}.h2,h2{font-size:calc(1.325rem + .9vw)}.h3,h3{font-size:calc(1.3rem + .6vw)}.h4,h4{font-size:calc(1.275rem + .3vw)}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}@media (min-width:1200px){.container{max-width:1140px}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-semibold{font-weight:600!important}.fw-bolder{font-weight:bolder!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}hr{margin:1rem 0;color:inherit;border:0;border-top:1px solid;opacity:.25}.border-1{border-width:1px}.border-2{border-width:2px}.border-3{border-width:3px}.border-4{border-width:4px}.border-5{border-width:5px}.text-primary{color:#007bff}.text-muted,.text-secondary{color:#6c757d}.text-success{color:#28a745}.text-danger{color:#dc3545}.text-warning{color:#ffc107}.text-info{color:#17a2b8}.text-light{color:#f8f9fa}.text-dark{color:#343a40}.text-white{color:#fff}.text-black-50{color:rgba(0,0,0,.5)}.bg-primary{background-color:#007bff;color:#fff}.bg-muted,.bg-secondary{background-color:#6c757d;color:#fff}.bg-success{background-color:#28a745;color:#fff}.bg-danger{background-color:#dc3545;color:#fff}.bg-warning{background-color:#ffc107;color:#212529}.bg-info{background-color:#17a2b8;color:#fff}.bg-light{background-color:#f8f9fa;color:#212529}.bg-dark{background-color:#343a40;color:#fff}.bg-white{background-color:#fff;color:#212529}.bg-transparent{background-color:transparent;color:inherit}.border-primary{border-color:#007bff}.border-muted,.border-secondary{border-color:#6c757d}.border-success{border-color:#28a745}.border-danger{border-color:#dc3545}.border-warning{border-color:#ffc107}.border-info{border-color:#17a2b8}.border-light{border-color:#f8f9fa}.border-dark{border-color:#343a40}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-secondary{color:#464a4e;background-color:#e2e3e5;border-color:#d6d8db}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}
            </style>
            </head>
            <body class="bg-transparent w-75 mx-auto">
                <main class="container">
                    <figure class="text-center mb-3">
                        <img src="{{ $image }}" class="" alt="" height="100" width="100">
                        <figcaption class="h4 fw-bold mb-2"> ${CONTENT.NAME.LONG}</figcaption>
                    </figure>
                    <div class="alert alert-light">
                        <div class="container">
                            <div class="d-block">
                                <p class="h6 mb-2">Dear <span class="text-dark">{{ $name }}</span>,</p>
                                <p class="h6 mb-4 text-justify">
                                    Thank you for choosing our services! In order to ensure the security and privacy
                                    of your account, we require you to verify your email address. To complete the verification
                                    process, please use the following One-Time Password (OTP):
                                </p>

                                <div class="alert alert-primary rounded-0 text-center h1 fw-bold mb-5 h3">{{ $otp }}</div>

                                <p class="h6 mb-2 text-justify">
                                    Please note that this OTP is valid for a limited time only.
                                    Kindly enter the OTP on the verification page within 10 minutes
                                    to successfully verify your email address.
                                </p>
                                <p class="h6 mb-3 text-justify">
                                    If you did not request this verification or have any concerns regarding your account's security,
                                    please contact our support team immediately at <a href="mailto:services@petregsys.com" class="">services@petregsys.com</a>.
                                </p>
                                <div class="d-flex">
                                    <a href="" class="h6 text-primary text-decoration-none me-1">Unsubscribe</a>
                                    <a class="h6 text-decoration-none mx-1">|</a>
                                    <a href="" class="h6 text-primary text-decoration-none mx-1">Contact Us</a>
                                    <a class="h6 text-decoration-none mx-1">|</a>
                                    <a href="" class="h6 text-primary text-decoration-none ms-1">Privacy Center</a>
                                </div>
                                <p class="h6 mb-1">© 2023 ${CONTENT.NAME.LONG}. All rights reserved.</p>
                                <p class="h6 mb-3">${CONTENT.ADDRESS}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
            </html>
    `;

export default Otp;