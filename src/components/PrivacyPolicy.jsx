import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-[#0D1B2A] px-8 md:px-20 lg:px-40 py-10 text-white">
        <h1 className="text-4xl text-white font-bold mb-6">Privacy Policy</h1>
        <p className="text-xl mb-4">Last Updated: 11/01/2024</p>

        <p className="text-lg mb-6">
          At My Garage Outlet, we value your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share information when you use our mobile application (“App”) and any related services provided by My Garage Outlet.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p className="text-lg mb-4">
          We may collect the following types of information when you use our App:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li><strong>Personal Information:</strong> This includes data like your name, email address, and phone number when you create an account. We use this information to provide and improve our services and facilitate communication with you.</li>
          <li><strong>Location Data:</strong> With your permission, we may collect and process your device’s location information to show garage sales near you. You may enable or disable location services at any time through your device settings.</li>
          <li><strong>Usage Data:</strong> We collect information about how you interact with the App, such as the features you use, the sales you view, and the time you spend on the app. This helps us improve user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="text-lg mb-6">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li>Provide, maintain, and improve the App.</li>
          <li>Customize your experience with location-based services.</li>
          <li>Communicate with you, such as to send updates, notifications, or respond to your inquiries.</li>
          <li>Analyze and improve the functionality and performance of the App.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Sharing Your Information</h2>
        <p className="text-lg mb-6">
          We do not sell, rent, or trade your personal information to third parties. We may share your information in limited cases, such as:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li><strong>With Service Providers:</strong> We may share information with third-party vendors and service providers who assist us in operating and maintaining the App.</li>
          <li><strong>For Legal Reasons:</strong> We may share information if required by law, such as to comply with a subpoena or similar legal process, or if we believe in good faith that such disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
        <p className="text-lg mb-6">
          We implement reasonable security measures to protect your information from unauthorized access, loss, or misuse. However, no internet or email transmission is ever fully secure or error-free, so please be cautious when sharing sensitive information with us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Your Choices</h2>
        <p className="text-lg mb-6">You have the following choices regarding your information:</p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li><strong>Access and Update:</strong> You can access and update your personal information by logging into your account.</li>
          <li><strong>Location Settings:</strong> You may enable or disable location services through your device settings.</li>
          <li><strong>Data Deletion:</strong> If you wish to delete your account or personal data, please contact us at <a href="mailto:info@mygarageoutlet.com" className="text-blue-400">info@mygarageoutlet.com</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Children’s Privacy</h2>
        <p className="text-lg mb-6">
          Our App is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us so we can delete it.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Changes to This Privacy Policy</h2>
        <p className="text-lg mb-6">
          We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new Privacy Policy within the App and updating the “Last Updated” date. Your continued use of the App after any modifications constitutes your acceptance of the new Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
        <p className="text-lg mb-6">
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg">
          <li>Email: <a href="mailto:info@mygarageoutlet.com" className="text-blue-400">info@mygarageoutlet.com</a></li>
          <li>Address: PO Box 24, Lecanto, FL 34460</li>
        </ul>

        <p className="text-lg mb-6">
          This Privacy Policy ensures transparency and trust while protecting user privacy on My Garage Outlet.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
