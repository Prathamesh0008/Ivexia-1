// src/pages/Products/IvexiaMagArticle.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./IvexiaMagArticle.css";


// Hero images
import geneTherapyImg from "../../assets/logo/article/gene-therapy.jpg";
import aiMedicineImg from "../../assets/logo/article/ai-medicine.jpg";
import personalizedImg from "../../assets/logo/article/personalized-medicine.jpg";
import womensDayImg from "../../assets/logo/article/womens-day.jpg";
import obesityImg from "../../assets/logo/article/obesity1.jpg";
import diabetesKidneyImg from "../../assets/logo/article/diabetes-kidney-1.jpg";

// attach CSS
import "./IvexiaMagArticle.css";

// All article metadata
const ARTICLES = {
  "gene-therapy-emerging-science": {
    title: "How Gene Therapy Is Transforming Modern Treatment",
    date: "May 13, 2024",
    category: "Emerging Science",
    readTime: "7–9 min read",
    heroImage: geneTherapyImg,
    type: "gene",
  },
  "power-of-ai-medical-industry": {
    title: "The Power of AI in the Medical Industry: 4 Things to Know",
    date: "May 11, 2024",
    category: "Digital Health & AI",
    readTime: "6–8 min read",
    heroImage: aiMedicineImg,
    type: "ai",
  },
  "personalized-medicine-basics": {
    title: "Personalized Medicine: Everything You Need to Know",
    date: "March 3, 2024",
    category: "Personalized Medicine",
    readTime: "6–8 min read",
    heroImage: personalizedImg,
    type: "personalized",
  },
  "international-womens-day-healthcare": {
    title: "In Honor of International Women’s Day",
    date: "February 21, 2024",
    category: "People & Culture",
    readTime: "5–7 min read",
    heroImage: womensDayImg,
    type: "womens-day",
  },
  "what-is-obesity-how-to-overcome-it": {
    title: "What Is Obesity—and How Do You Really Overcome It?",
    date: "March 9, 2024",
    category: "Metabolic Health",
    readTime: "6–8 min read",
    heroImage: obesityImg,
    type: "obesity",
  },
  "diabetes-kidney-disease-1": {
    title: "Does Diabetes Increase the Risk of Kidney Disease?",
    date: "December 4, 2023",
    category: "Diabetes & Kidneys",
    readTime: "5–7 min read",
    heroImage: diabetesKidneyImg,
    type: "diabetes",
  },
};

export default function IvexiaMagArticle() {
  const { slug } = useParams();
  const article = ARTICLES[slug];

  if (!article) {
    return (
      <div className="mag-article-page">
        <div className="mag-article-container">
          <p className="mag-article-breadcrumb">
            Home / Ivexia Mag / <span>Article</span>
          </p>
          <h1 className="mag-article-title">Article not found</h1>
          <p style={{ marginBottom: 16 }}>
            The article you’re looking for is not available yet.
          </p>
          <div className="mag-article-back">
            <Link to="/ivexia-mag" className="mag-article-back-link">
              ← Back to Ivexia Mag
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mag-article-page">
      <div className="mag-article-container">
        {/* Breadcrumb */}
        <p className="mag-article-breadcrumb">
          Home / Ivexia Mag /{" "}
          <span>{article.title}</span>
        </p>

        {/* Header */}
        <header className="mag-article-header">
          <h1 className="mag-article-title">{article.title}</h1>
          <div className="mag-article-meta">
            <span className="mag-article-chip">{article.category}</span>
            <span className="mag-article-dot">•</span>
            <span>{article.date}</span>
            <span className="mag-article-dot">•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Hero image band */}
        <div className="mag-article-hero">
          <img
            src={article.heroImage}
            alt={article.title}
            className="mag-article-hero-img"
          />
          <p className="mag-article-hero-caption">
            {article.type === "gene" &&
              "Gene therapy looks at disease from the level of DNA, aiming to correct or adjust the instructions that cells follow."}
            {article.type === "ai" &&
              "Artificial intelligence helps turn complex medical and pharmaceutical data into faster, more informed decisions."}
            {article.type === "personalized" &&
              "Personalized medicine combines genetics, clinical data and lifestyle information to tailor treatment to each patient."}
            {article.type === "womens-day" &&
              "International Women’s Day is a moment to celebrate women’s achievements and to focus on closing gaps in women’s health."}
            {article.type === "obesity" &&
              "Obesity is influenced by biology, environment and lifestyle. Long-term management needs structure, not just short diets."}
            {article.type === "diabetes" &&
              "Diabetes is one of the most important risk factors for chronic kidney disease, especially when blood sugar and blood pressure stay high over time."}
          </p>
        </div>

        {/* Body */}
        <article className="mag-article-body">
          {article.type === "gene" && <GeneTherapyBody />}
          {article.type === "ai" && <AiMedicineBody />}
          {article.type === "personalized" && <PersonalizedMedicineBody />}
          {article.type === "womens-day" && <WomensDayBody />}
          {article.type === "obesity" && <ObesityBody />}
          {article.type === "diabetes" && <DiabetesKidneyBody />}

          <div className="mag-article-back">
            <Link to="/ivexia-mag" className="mag-article-back-link">
              ← Back to Ivexia Mag
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

/* ========= Shared small components ========= */

function InfoBox({ title, items }) {
  return (
    <div className="mag-article-toc">
      <p className="mag-article-toc-label">{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function SectionTitle({ children }) {
  return <h2>{children}</h2>;
}

function SubTitle({ children }) {
  return <h3>{children}</h3>;
}

/* ========= ARTICLE BODIES ========= */

/* 1. Gene therapy */
function GeneTherapyBody() {
  return (
    <>
      <p>
        Gene therapy is an approach where treatment starts at the level of our
        genes. Instead of only trying to control symptoms with tablets or
        injections, scientists work directly with the DNA instructions inside
        cells. The idea is to repair, replace or switch off genes that are
        driving disease.
      </p>
      <p>
        This becomes especially important in conditions that are strongly linked
        to genetics—rare inherited disorders, some blood diseases and certain
        cancers. In many of these, conventional medicine can only slow the
        process. Gene therapy aims to change the script the body is following,
        closer to the root cause.
      </p>

      <InfoBox
        title="In this article:"
        items={[
          "What gene therapy actually is",
          "Different approaches to gene therapy",
          "How modern tools and AI support this field",
          "Where gene therapy is being used today",
          "Key benefits and challenges",
          "Where the science is heading next",
        ]}
      />

      <SectionTitle>What is gene therapy?</SectionTitle>
      <p>
        Inside almost every cell of the body, DNA carries instructions for how
        that cell should function. When part of this instruction manual is
        damaged, missing or altered, disease can appear. Gene therapy focuses on
        those faulty sections. By adding, removing or adjusting genetic
        material, scientists try to restore more normal cell function.
      </p>

      <p>In simple terms, gene therapy can:</p>
      <ul>
        <li>add a working copy of a missing or broken gene,</li>
        <li>reduce or silence a harmful gene, or</li>
        <li>edit the DNA sequence using modern gene-editing tools.</li>
      </ul>

      <SectionTitle>Main approaches to gene therapy</SectionTitle>

      <SubTitle>1. Gene augmentation</SubTitle>
      <p>
        Some diseases occur because a key gene is missing or not working
        properly. In gene augmentation, a healthy copy of that gene is delivered
        into the patient’s cells. Even if the original faulty gene is still
        there, the new working copy can help restore function.
      </p>

      <SubTitle>2. Gene inhibition</SubTitle>
      <p>
        In other diseases, the problem is a gene that is too active or producing
        something harmful—for example, some cancer-driving genes. Gene
        inhibition strategies try to silence or reduce the activity of this gene
        so that its negative effects are reduced.
      </p>

      <SubTitle>3. Gene editing</SubTitle>
      <p>
        Newer tools such as CRISPR act like molecular scissors, allowing
        scientists to cut DNA at precise locations. This makes it possible to
        correct mutations, remove a harmful sequence or insert new genetic
        material with much greater accuracy. Because these changes directly
        affect the genome, safety monitoring over the long term is essential.
      </p>

      <SectionTitle>How digital tools support gene therapy</SectionTitle>
      <p>
        Gene therapy research produces large amounts of data—genetic sequences,
        lab findings, clinical outcomes and safety signals. AI and advanced
        analytics help make sense of this information, highlight important
        mutations and support decisions on which patients are most likely to
        benefit from a specific therapy.
      </p>

      <SectionTitle>Where gene therapy is used today</SectionTitle>
      <p>
        So far, the first approved gene therapies have mainly targeted rare but
        serious inherited diseases where a single gene plays a clear role. In
        these settings, even a partial correction can transform quality of life.
        Research is expanding into oncology, cardiovascular conditions,
        neurology and some infectious diseases.
      </p>

      <SectionTitle>Benefits and challenges</SectionTitle>

      <SubTitle>Potential benefits</SubTitle>
      <ul>
        <li>Acts at the root cause instead of only managing symptoms,</li>
        <li>Can offer long-lasting or one-time treatments,</li>
        <li>Offers precision targeting of selected cells or tissues,</li>
        <li>Creates new options where standard therapies are limited.</li>
      </ul>

      <SubTitle>Points to watch</SubTitle>
      <ul>
        <li>Unintended effects on other parts of the genome,</li>
        <li>Possible immune reactions to the delivery vector,</li>
        <li>Complex, high-cost manufacturing,</li>
        <li>
          The need for long-term follow-up to fully understand benefits and
          risks.
        </li>
      </ul>

      <SectionTitle>Ethics and the future</SectionTitle>
      <p>
        Because gene therapy modifies fundamental instructions inside cells, it
        naturally raises ethical questions about access, fairness and long-term
        consequences. Regulators, scientists and patient groups are working
        together to build strong safeguards while still allowing innovation to
        move forward.
      </p>
      <p>
        As delivery systems become safer and more precise, gene therapy is
        expected to play a growing role in mainstream care—especially for
        conditions where traditional treatments are no longer enough.
      </p>
    </>
  );
}

/* 2. AI in medical industry */
function AiMedicineBody() {
  return (
    <>
      <p>
        Artificial intelligence (AI) is rapidly becoming one of the most
        important tools in modern healthcare. Instead of working with a handful
        of lab results or a single scan, AI systems can analyse thousands of
        data points at once and highlight patterns that humans might not see
        immediately.
      </p>
      <p>
        In hospitals and in the pharmaceutical industry, AI is less about
        replacing people and more about supporting better, faster decisions.
        Used well, it can help improve outcomes, reduce waste and bring more
        personalised care within reach.
      </p>

      <InfoBox
        title="In this article:"
        items={[
          "The impact of AI in medicine",
          "AI in the pharmaceutical industry",
          "AI in pharma marketing",
          "AI in healthcare systems and hospitals",
          "The future of AI in medicine",
          "Why this matters for patients and pharma",
        ]}
      />

      <SectionTitle>The impact of AI in medicine</SectionTitle>
      <p>
        AI is not a single technology. It includes machine learning,
        deep-learning models and natural language processing. In healthcare,
        these tools help with image interpretation, risk prediction, logistics
        and more. They can assist doctors in spotting early signs of disease,
        suggest which patients are at higher risk of complications and support
        decisions about treatment.
      </p>

      <SectionTitle>AI in the pharmaceutical industry</SectionTitle>
      <p>
        Pharma has always relied on data: chemical libraries, biological
        experiments, clinical trials and safety reports. AI combines these
        information streams and helps scientists test more ideas in less time.
      </p>
      <ul>
        <li>
          <strong>Drug discovery:</strong> algorithms can screen virtual
          libraries and predict how molecules might bind to targets.
        </li>
        <li>
          <strong>Formulation and process:</strong> models can simulate how
          changes in ingredients or process conditions affect stability and
          quality.
        </li>
        <li>
          <strong>Safety and modelling:</strong> AI supports predictions of
          exposure, response and potential side effects early in development.
        </li>
      </ul>

      <SectionTitle>AI in pharma marketing</SectionTitle>
      <p>
        In marketing, AI makes campaigns more data-driven. It helps teams
        understand which groups of doctors and patients they are reaching, what
        information people are looking for and which channels actually work.
      </p>
      <ul>
        <li>More precise segmentation beyond age and geography,</li>
        <li>Content tailored to real information needs,</li>
        <li>
          Better measurement of what truly changes awareness or behaviour, not
          just clicks.
        </li>
      </ul>
      <p>
        AI can also support compliance by checking whether materials stay aligned
        with regulations and approved product information.
      </p>

      <SectionTitle>AI in healthcare systems and hospitals</SectionTitle>
      <p>
        In hospitals, AI-based decision support tools analyse labs, imaging,
        vital signs and medication history to flag patients who may need
        urgent attention or a different treatment approach.
      </p>
      <ul>
        <li>Imaging support for radiologists,</li>
        <li>Risk prediction tools for complications or readmissions,</li>
        <li>Virtual assistants for basic questions and reminders.</li>
      </ul>

      <SectionTitle>The future of AI in medicine</SectionTitle>
      <p>
        Looking ahead, AI is expected to play a key role in precision medicine:
        treatment built around each patient’s genetics, lifestyle and other risk
        factors. We can expect more accurate risk scores, smarter clinical
        trials and better tools for monitoring patients at home.
      </p>
      <p>
        At the same time, questions about transparency, bias and data privacy
        must stay at the centre of AI implementation. Technology needs to work
        under clear rules, with human clinicians still responsible for final
        decisions.
      </p>

      <SectionTitle>Why AI matters for patients and pharma</SectionTitle>
      <p>
        For patients, the promise of AI is earlier detection, more personalised
        therapies and smoother experiences with the health system. For pharma
        and providers, AI is a way to use existing data more intelligently.
      </p>
      <p>
        The key is not just adopting tools, but integrating them into thoughtful
        clinical and business workflows—with strong governance and continuous
        monitoring of real-world impact.
      </p>
    </>
  );
}

/* 3. Personalized medicine */
function PersonalizedMedicineBody() {
  return (
    <>
      <p>
        Personalized medicine shifts healthcare away from a one-size-fits-all
        model. Instead of giving every patient with the same diagnosis the same
        standard therapy, clinicians use genetic information, clinical data and
        lifestyle factors to tailor treatment plans to the individual.
      </p>
      <p>
        At the heart of this approach are advances in genomic sequencing and
        data analysis. These tools allow teams to understand why two people with
        the same condition may respond very differently to the same medicine.
      </p>

      <InfoBox
        title="In this article:"
        items={[
          "What personalized medicine actually means",
          "How genetic engineering and precision medicine work together",
          "Key benefits for patients and health systems",
          "Challenges and open questions",
          "Why this approach matters for the future of care",
        ]}
      />

      <SectionTitle>What is personalized medicine?</SectionTitle>
      <p>
        Personalized medicine uses detailed information about each patient to
        guide prevention, diagnosis and treatment. That includes genetics,
        biomarker profiles, co-existing conditions, environment and lifestyle.
        Instead of asking “What usually works for this disease?”, teams ask
        “What is most likely to work for this specific person?”.
      </p>

      <SectionTitle>
        Genetic engineering and precision medicine working together
      </SectionTitle>
      <p>
        Genetic engineering helps decode a person’s unique DNA. With modern
        sequencing techniques, it is possible to identify variants linked to
        certain diseases, drug responses or risk of side effects. Precision
        medicine then takes these genetic insights and combines them with
        clinical and lifestyle data to choose the most suitable intervention.
      </p>
      <p>
        For example, in oncology, tumour genetics may determine which targeted
        therapies are likely to work. In cardiology or diabetes, genetic and
        biomarker information can help identify patients who need closer
        monitoring or more aggressive treatment.
      </p>

      <SectionTitle>Benefits of personalized medicine</SectionTitle>
      <ul>
        <li>
          <strong>More precise treatments:</strong> higher chance of response,
          lower risk of unnecessary side effects.
        </li>
        <li>
          <strong>Proactive care:</strong> focus on early detection and
          prevention rather than late-stage rescue.
        </li>
        <li>
          <strong>Better resource use:</strong> health systems can invest in
          treatments that are more likely to work for each patient group.
        </li>
        <li>
          <strong>Innovation:</strong> supports development of new diagnostics
          and therapies for smaller, well-defined patient segments.
        </li>
      </ul>

      <SectionTitle>Challenges and responsibilities</SectionTitle>
      <p>
        While the promise is strong, implementing personalized medicine at
        scale is not simple. There are important questions around:
      </p>
      <ul>
        <li>data privacy and protection of sensitive genetic information,</li>
        <li>equitable access so that new tools do not widen existing gaps,</li>
        <li>clear regulatory frameworks for tests and targeted therapies,</li>
        <li>
          interoperability between different data systems used by hospitals,
          labs and payers.
        </li>
      </ul>

      <SectionTitle>Looking ahead</SectionTitle>
      <p>
        Despite these challenges, personalized medicine is likely to become a
        central part of how care is delivered. As sequencing becomes cheaper and
        data infrastructure improves, more patients will benefit from treatment
        plans built around their own biology and circumstances—not averages.
      </p>
      <p>
        For companies like Ivexia, this shift reinforces the importance of
        strong science, reliable data and patient-centred thinking across every
        stage of development and distribution.
      </p>
    </>
  );
}

/* 4. International Women’s Day */
function WomensDayBody() {
  return (
    <>
      <p>
        International Women’s Day, celebrated on 8 March, is a moment to
        recognize women’s achievements and to highlight the work still needed to
        close gaps in equality. In healthcare, those gaps are especially clear:
        many women around the world still struggle to access the services,
        information and support they need.
      </p>
      <p>
        Putting women’s health at the centre means looking at both medical and
        social realities—what diseases affect women most, how early they are
        detected, and how factors like education, income and culture shape
        day-to-day choices.
      </p>

      <SectionTitle>Women’s health challenges</SectionTitle>
      <p>Across many countries, women face a combination of obstacles:</p>
      <ul>
        <li>
          limited access to reproductive health services and maternal care,
        </li>
        <li>
          under-diagnosis or late diagnosis of chronic diseases like heart
          disease and diabetes,
        </li>
        <li>
          cultural norms and discrimination that make it harder to seek care or
          to be taken seriously when symptoms appear.
        </li>
      </ul>
      <p>
        These barriers don’t just affect individuals—they influence families,
        communities and the next generation.
      </p>

      <SectionTitle>Diseases that disproportionately affect women</SectionTitle>
      <p>Certain conditions particularly impact women’s health outcomes:</p>
      <ul>
        <li>
          <strong>Breast cancer</strong> and <strong>cervical cancer</strong>,
          where screening and early detection can dramatically change survival.
        </li>
        <li>
          <strong>Maternal complications</strong>, including bleeding and
          infections during pregnancy and childbirth.
        </li>
        <li>
          Other chronic conditions where women may present differently from men,
          leading to missed or delayed diagnoses.
        </li>
      </ul>

      <SectionTitle>Promoting women’s health: key levers</SectionTitle>
      <p>Improving women’s health requires action on multiple fronts:</p>
      <ul>
        <li>
          <strong>Better access:</strong> expanding affordable services for
          maternal care, contraception, cancer screening and chronic disease
          management.
        </li>
        <li>
          <strong>Addressing socio-economic factors:</strong> investing in girls’
          education, economic opportunities and social support so that women can
          make informed choices about their health.
        </li>
        <li>
          <strong>Research and innovation:</strong> designing studies that
          include women in sufficient numbers and analysing sex-specific
          outcomes.
        </li>
        <li>
          <strong>Policy and advocacy:</strong> shaping laws and health policies
          that protect reproductive rights, remove discrimination and guarantee
          essential services.
        </li>
      </ul>

      <SectionTitle>A commitment beyond one day</SectionTitle>
      <p>
        International Women’s Day is a reminder, not a single event. Closing the
        gap in women’s health requires long-term commitment from governments,
        companies, healthcare providers and communities. When women have access
        to quality care and their health needs are taken seriously, families and
        societies become stronger and more resilient.
      </p>
      <p>
        For Ivexia, prioritising women’s health means thinking carefully about
        how medicines are developed, which diseases are addressed and how
        information is communicated—to clinicians, to patients and to the public.
      </p>
    </>
  );
}

/* 5. Obesity */
function ObesityBody() {
  return (
    <>
      <p>
        Obesity is not just about weight or appearance. It is a complex, chronic
        condition influenced by genetics, hormones, environment, mental health
        and daily habits. For many people, it develops slowly over years as
        small imbalances in energy intake and expenditure add up.
      </p>
      <p>
        Because obesity is linked to diseases such as type 2 diabetes, heart
        disease and some cancers, understanding and managing it early is one of
        the most powerful ways to protect long-term health.
      </p>

      <SectionTitle>Why obesity happens</SectionTitle>
      <p>
        While diet and activity matter, they are only part of the story.
        Biological factors, sleep, stress, medications and social context all
        play roles. Blaming individuals or focusing only on willpower ignores
        how complex the condition really is.
      </p>

      <SectionTitle>Health risks associated with obesity</SectionTitle>
      <ul>
        <li>Higher risk of type 2 diabetes and insulin resistance,</li>
        <li>Increased likelihood of high blood pressure and heart disease,</li>
        <li>Greater risk of joint problems, sleep apnoea and some cancers,</li>
        <li>
          Impact on mental health, including low self-esteem and depression.
        </li>
      </ul>

      <SectionTitle>Approaching weight management realistically</SectionTitle>
      <p>
        Sustainable weight management is not about extreme diets or short
        challenges. It requires a structured plan that fits real life:
      </p>
      <ul>
        <li>balanced, enjoyable nutrition rather than strict rules,</li>
        <li>regular physical activity that feels achievable and safe,</li>
        <li>
          attention to sleep, stress and emotional eating triggers,
        </li>
        <li>
          and, in some cases, medication or surgery under professional guidance.
        </li>
      </ul>

      <SectionTitle>Long-term support matters</SectionTitle>
      <p>
        Because obesity is a chronic condition, support over time is essential.
        Regular check-ins, realistic goals and a non-judgmental approach make it
        easier to maintain progress. The aim is not perfection, but consistent
        small steps that add up to better health.
      </p>
    </>
  );
}

/* 6. Diabetes & kidney disease */
function DiabetesKidneyBody() {
  return (
    <>
      <p>
        Diabetes is one of the leading causes of chronic kidney disease (CKD)
        worldwide. When blood sugar and blood pressure stay high over many
        years, the tiny blood vessels in the kidneys can become damaged. This
        silently reduces their ability to filter waste and extra fluid from the
        body.
      </p>
      <p>
        Kidney damage in diabetes often develops slowly and may not cause clear
        symptoms at first. That is why regular checks and early action are so
        important.
      </p>

      <SectionTitle>How diabetes affects the kidneys</SectionTitle>
      <p>
        High blood sugar damages the delicate filtering units in the kidneys,
        called glomeruli. Over time, the filters become leaky and proteins like
        albumin begin to spill into the urine. This is one of the earliest
        measurable signs that the kidneys are under stress.
      </p>
      <p>
        At the same time, high blood pressure and inflammation add extra strain.
        If nothing changes, the damage slowly accumulates, and kidney function
        drops, sometimes without obvious symptoms for many years.
      </p>

      <SectionTitle>Warning signs to watch for</SectionTitle>
      <p>Diabetic kidney disease can be silent, but some clues include:</p>
      <ul>
        <li>swelling in the legs, ankles or around the eyes,</li>
        <li>foamy or bubbly urine (a sign of protein loss),</li>
        <li>
          rising blood pressure that becomes harder to control than before,
        </li>
        <li>unusual tiredness, loss of appetite or poor concentration.</li>
      </ul>

      <SectionTitle>The role of screening</SectionTitle>
      <p>
        For people living with diabetes, guidelines usually recommend regular
        kidney checks—including urine tests for albumin and blood tests for
        creatinine and estimated glomerular filtration rate (eGFR). These simple
        measurements can detect kidney involvement long before severe symptoms
        appear.
      </p>

      <SectionTitle>Protecting the kidneys</SectionTitle>
      <ul>
        <li>
          <strong>Blood sugar control:</strong> keeping glucose within target
          ranges reduces ongoing damage.
        </li>
        <li>
          <strong>Blood pressure management:</strong> tight control, often with
          ACE inhibitors or ARBs, is one of the most effective ways to protect
          the kidneys.
        </li>
        <li>
          <strong>Lifestyle measures:</strong> nutrition, movement, not smoking
          and good sleep support vascular and kidney health.
        </li>
      </ul>

      <SectionTitle>A message of prevention and partnership</SectionTitle>
      <p>
        Diabetes does increase the risk of kidney disease—but that risk is not
        fixed. With early detection, consistent control of risk factors and a
        strong partnership between patient and care team, it is possible to
        protect kidney function for much longer.
      </p>
    </>
  );
}
