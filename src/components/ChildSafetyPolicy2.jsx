import React from 'react';

const ChildSafetyPolicy2 = () => {
  return (
    <>
      <div className="bg-[#0D1B2A] px-8 md:px-20 lg:px-40 py-10 text-white">
        {/* Heading 1 */}
        <h1 className="text-xl md:text-4xl text-white font-bold mb-6">My Garage Outlet Child Safety Policy</h1>
        <p className="text-md md:text-xl mb-4">Last Updated: 09/25/2025</p>

        <p className="text-md md:text-lg mb-6">
          My Garage Outlet is committed to ensuring a safe and secure environment for all users, including families and children. While our platform facilitates garage sales and mobile business transactions, we recognize the importance of child safety and have established this policy to promote responsible use.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">1. General Guidelines</h2>
        <ul className="list-disc pl-6 mb-6 text-md md:text-lg space-y-2">
          <li>My Garage Outlet is designed for individuals 18 years and older. Users under 18 must have parental or guardian supervision when using the platform.</li>
          <li>We strongly encourage parents and guardians to monitor their children’s online and in-person activities related to garage sales.</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">2. Prohibited Activities</h2>
        <p className="text-md md:text-lg mb-4">To protect children, the following activities are strictly prohibited on My Garage Outlet:</p>
        <ul className="list-disc pl-6 mb-6 text-md md:text-lg space-y-2">
          <li>Posting images, descriptions, or listings that exploit or endanger children in any way.</li>
          <li>Sharing or requesting personal information from minors.</li>
          <li>Using the platform to arrange in-person meetings with minors for any purpose unrelated to a lawful garage sale or business transaction.</li>
          <li>Selling or promoting items that are inappropriate for children, such as harmful substances, adult content, or weapons.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">3. Reporting and Enforcement</h2>
        <ul className="list-disc pl-6 mb-6 text-md md:text-lg space-y-2">
          <li>Users who suspect child endangerment, exploitation, or inappropriate conduct should report it immediately via our in-app reporting feature or by emailing <span className="text-blue-400">[support email]</span>.</li>
          <li>My Garage Outlet reserves the right to suspend or ban any user found violating this policy.</li>
          <li>If any reports involve illegal activity, we will cooperate with law enforcement authorities as required by law.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">4. Safety Recommendations for Families</h2>
        <ul className="list-disc pl-6 mb-6 text-md md:text-lg space-y-2">
          <li><strong>Supervise Transactions:</strong> Parents should accompany children to any garage sale or mobile vendor they visit through My Garage Outlet.</li>
          <li><strong>Meet in Safe Locations:</strong> Always meet in public, well-lit places, and never allow children to meet strangers alone.</li>
          <li><strong>Avoid Sharing Personal Information:</strong> Do not disclose home addresses, school details, or other personal information publicly.</li>
          <li><strong>Use Caution with Cash Transactions:</strong> Since most garage sales operate on a cash basis, families should ensure children are not handling large amounts of money and should be cautious when exchanging cash.</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">5. Continuous Policy Review</h2>
        <p className="text-md md:text-lg mb-6">
          My Garage Outlet is committed to keeping our platform safe for all users. This policy will be reviewed and updated regularly to ensure compliance with child protection laws and best practices.
        </p>

        <p className="text-md md:text-lg mb-6">
          For any concerns or further information, please contact <a href="mailto:info@mygarageoutlet.com" className="text-blue-400">info@mygarageoutlet.com</a>.
        </p>
      </div>
    </>
  );
};

export default ChildSafetyPolicy2;
