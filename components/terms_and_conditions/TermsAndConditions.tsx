import * as React from 'react';
import type { NextPage } from 'next'
import { IntlProvider } from 'react-intl'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Link from 'next/link';
import styles from './TermsAndConditions.module.scss';

const TermsAndConditions:NextPage = () => {
  const lang = useSelector((state:RootState) => state.lang ?? "");
  const title_with_lang:string = (lang == 'zh') ? '安康藥房' : 'Peace Pharmacy';
  return (
    <>
      <div className={styles.terms_and_conditions_wrapper}>
        <div className={styles.terms_and_conditions_wrapper_inner}>
          <h1> Terms and Conditions | 条款及细则 </h1>
          <div className={styles.terms_and_conditions_statement_wrapper}>
            <p>
              This website including any content, functionality, and services offered on or through this website and its associated subdomains is operated by PEACE PHARMACY INC. These website terms of use govern your access and use of this website offered to you conditioned upon ther acceptance without modification thise Terms. THESE TERMS CONTAIN IMPORTANT INFORMATION REGARDING LIMITATIONS OF OUR LIABILITY, YOUR INDEMNIFICATION OBLIGATIONS, AND THE LAW GOVERNING, AND DISPUTE RESOLUTION PROCEDURES RELATED TO, YOUR ACCESS AND USE OF THE WEBSITE.
            </p>
            <p>
              By accessing or using this Website or other elements of this Website, YOU AGREE TO BE BOUND by these Terms, and our Privacy Policy. If you do not want to accept all the terms, conditions, and notices of these Terms, you must immediately discontinue your use and access of the Website.
            </p>
            <p>The parties agree as follows</p>
            <h2> 1. Our Collection and Use of Your Data is Governed by Our Privacy Policy </h2>
            <p>
              PEACE PHARMACY believes in protecting your privacy. All information we collect on the Website is subject to our Privacy Policy, except that in some circumstances our collection of such information subjects PEACE PHARMACY to the requirements of the Health Information Portability and Accountability Act of 1996 as amended by The Health Information Technology for Economic and Clinical Health Act. 
            </p>
            <h2> 2. THE WEBSITE IS NOT INTENDED AS A SUBSTITUTE FOR MEDICAL ADVICE </h2>
            <p>
            The text, graphics, images, software applications, information and other material contained on the Website (“Content“) are for informational purposes only. The Content is not intended to replace or be a substitute for professional medical advice, diagnosis, or treatment. It is your sole responsibility to check product information, including drug packets inserts, regarding dosage, precautions, warnings, interactions, and contraindications before administering or using any drug or supplement discussed on the Website. Always seek the advice of your physician, pharmacist, or other qualified health provider with any questions you may have regarding a medical condition, before staring any new medication or treatment or the proper use of pharmaceutical products. Never disregard professional medical advice or delay in seeking it because of something you have read on this site.
            </p>
            <h2> 3. PEACE PHARMACY Does Not Endorse or Recommend any Specific Products or Services </h2>
            <p>
            References to, or descriptions or images of, products or services (or related coupons and discounts) on the Website are not endorsements of such products or services and such products or services may be available by third parties.  PEACE PHARMACY does not recommend or endorse any specific tests, physicians, pharmacist, products, services, procedures, opinions, or other information that may be mentioned on the Website.
            </p>
            <h2>4. PEACE PHARMACY is Not Responsible for Third-Party Content</h2>
            <p>The Website may contain links to third-party web sites. PEACE PHARMACY is not responsible for the content of linked third-party sites, sites framed within the Website, third-party sites provided as search results, or third-party advertisements, and does not make any representations or warranties regarding the content or accuracy of any such content. Your use of third-party websites is at your own risk and subject to the terms and conditions of use for such sites.</p>
            <h2>5. We May Update or Otherwise Revise These Terms at Any Time</h2>
            <p>We reserve the right to change or otherwise modify these Terms at any time. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter. Your continued access or use of the Website after receiving notice of any the update, modification or other change to these Terms signifies your acceptance thereof.</p>
            <h2>6. You Must Meet Certain Conditions to Use the Website</h2>
            <p>
            As a condition of your use of the Website, you warrant that you:
            </p>
            <ul>
              <li>are at least 18 years of age; and</li>
              <li>reside in the United States of America</li>
            </ul>
            <p><em>If you do not meet all of the following, you must immediately discontinue your use and access of the Website.</em></p>
            <h2>7. You are Prohibited from Using the Website for Certain Purposes</h2>
            <p>You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to, and you must not, use the Website:</p>
            <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).</li>
              <li>For the purpose of exploiting, harming, threatening, harassing or defaming any person, or attempting to do any of the foregoing.</li>
              <li>In any manner that could disable, overburden, damage, or impair the Website or interfere with any other person’s use of the Website, including their ability to engage in real time activities through the Website.</li>
            </ul>
            <p>Additionally, you agree not to, and you must not:</p>
            <ul>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.</li>
              <li>Use any manual process to monitor or copy any of the material on the Website or for any other unauthorized purpose without our prior written consent.</li>
              <li>Use any device, software, or routine that interferes with the proper working of the Website.</li>
              <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website.</li>
              <li>Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.</li>
              <li>“Frame,” “mirror” or otherwise incorporate any part of this Website into any other website.</li>
              <li>Otherwise attempt to interfere with the proper working of the Website.</li>
            </ul>






            <p>
              本网站包括在本网站上或通过本网站及其相关子域提供的任何内容、功能和服务，由 PEACE PHARMACY INC 运营。这些网站使用条款管理您对本网站的访问和使用，前提是您接受本网站而无需修改 条款。 这些条款包含有关我们的责任限制、您的赔偿义务以及与您访问和使用本网站相关的法律管辖和争议解决程序的重要信息。
            </p>
            <p>
              通过访问或使用本网站或本网站的其他元素，您同意受这些条款和我们的隐私政策的约束。 如果您不想接受这些条款的所有条款、条件和通知，您必须立即停止使用和访问本网站。
            </p>
            <p>双方约定如下</p>
            <h2>  1. 我们收集和使用您的数据受我们的隐私政策约束 </h2>
            <p>
              PEACE PHARMACY 相信保护您的隐私。 我们在网站上收集的所有信息均受我们的隐私政策约束，但在某些情况下，我们收集此类信息会使 PEACE PHARMACY 遵守经经济和健康信息技术修订的 1996 年健康信息携带和责任法案的要求。 临床健康法。
            </p>
            <h2>  2. 本网站不能替代医疗建议 </h2>
            <p>
              网站上包含的文本、图形、图像、软件应用程序、信息和其他材料（“内容”）仅供参考。 内容无意取代或替代专业医疗建议、诊断或治疗。 在管理或使用网站上讨论的任何药物或补充剂之前，您有责任检查产品信息，包括药物包装说明书、剂量、预防措施、警告、相互作用和禁忌症。 在开始任何新的药物或治疗或正确使用医药产品之前，如果您对医疗状况有任何疑问，请务必咨询您的医生、药剂师或其他合格的健康提供者的建议。 切勿因您在本网站上阅读的内容而忽视专业医疗建议或延迟寻求医疗建议。
            </p>
            <h2>  3. PEACE PHARMACY 不认可或推荐任何特定产品或服务 </h2>
            <p>
              网站上对产品或服务（或相关优惠券和折扣）的引用、描述或图像不代表对此类产品或服务的认可，此类产品或服务可能由第三方提供。 PEACE PHARMACY 不推荐或认可网站上可能提及的任何特定测试、医生、药剂师、产品、服务、程序、意见或其他信息。
            </p>
            <h2>  4. PEACE PHARMACY 不对第三方内容负责</h2>
            <p> 本网站可能包含指向第三方网站的链接。 PEACE PHARMACY 不对链接的第三方网站、本网站框架内的网站、作为搜索结果提供的第三方网站或第三方广告的内容负责，也不对内容或准确性作出任何陈述或保证 任何此类内容。 您自行承担使用第三方网站的风险并遵守此类网站的使用条款和条件。</p>
            <h2>  5. 我们可能随时更新或修改这些条款</h2>
            <p> 我们保留随时更改或以其他方式修改这些条款的权利。 所有更改在我们发布后立即生效，并适用于此后对本网站的所有访问和使用。 您在收到有关这些条款的任何更新、修改或其他更改的通知后继续访问或使用本网站，即表示您接受这些条款。</p>
            <h2>  6. 您必须满足某些条件才能使用本网站</h2>
            <p>
              作为您使用本网站的条件，您保证：
            </p>
            <ul>
              <li>至少年满 18 岁； 和</li>
              <li>居住在美利坚合众国</li>
            </ul>
            <p><em>如果您不满足以下所有条件，则必须立即停止使用和访问本网站。</em></p>
            <h2>  7. 禁止您出于某些目的使用本网站</h2>
            <p>您只能出于合法目的并根据这些使用条款使用本网站。 您同意不且不得使用本网站：</p>
            <ul>
              <li>以任何方式违反任何适用的联邦、州、地方或国际法律或法规（包括但不限于有关向美国或其他国家/地区出口数据或软件的任何法律）。</li>
              <li>为了剥削、伤害、威胁、骚扰或诽谤任何人，或试图进行上述任何行为。</li>
              <li>以任何可能使网站停用、负担过重、损坏或受损或干扰任何其他人使用网站的方式，包括他们通过网站参与实时活动的能力。</li>
            </ul>
            <p>此外，您同意不会且不得：</p>
            <ul>
              <li>出于任何目的使用任何机器人、网络蜘蛛或其他自动设备、过程或方式访问网站，包括监控或复制网站上的任何材料。</li>
              <li>未经我们事先书面同意，使用任何手动程序监控或复制网站上的任何材料或用于任何其他未经授权的目的。</li>
              <li>使用任何会干扰网站正常运行的设备、软件或程序。</li>
              <li>引入任何病毒、特洛伊木马、蠕虫、逻辑炸弹或其他恶意或技术有害的材料。</li>
              <li>试图未经授权访问、干扰、损坏或破坏网站的任何部分、存储网站的服务器或连接到网站的任何服务器、计算机或数据库。</li>
              <li>通过拒绝服务攻击或分布式拒绝服务攻击攻击网站。</li>
              <li>“框架”、“镜像”或以其他方式将本网站的任何部分并入任何其他网站。</li>
              <li>否则试图干扰网站的正常工作。</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsAndConditions