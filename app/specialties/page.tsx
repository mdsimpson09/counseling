import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SpecialtyArea from "../components/specialtyArea";

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#1C3142] h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/hero-placeholder.jpg"
              alt="Hero background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-serif text-white mb-4">
              Specialties
            </h1>
            <p className="text-xl text-white/90 font-light">
            &quot;Your job is to feel and be moved by your feelings, and to let that movement move you into action.&quot;
            </p>
            <p className="text-xl text-white/90 font-light mt-2">
              - Glennon Doyle
            </p>
          </div>
        </section>

        {/* Specialty Areas Section */}
        <section className="bg-[#F5F2EF]"> {/* Cream background color from reference */}
          <h2 className="text-4xl text-[#1C3142] font-light py-16 text-center">
            Specialty Areas
          </h2>

          <div>
            <SpecialtyArea
              title="LGBTQIA+"
              description="I strive to create a safe and inclusive space for LGBTQIA+ individuals and allies. It is my privilege to support you through life&apos;s stressors, identity and sexual exploration, processing experiences of discrimination or rejection, and navigating relationships. I also offer gender-affirming healthcare assessments and letters when needed. Every part of you is welcome here, and I am honored to celebrate your resilience and growth as you reconnect with your authentic self."
            />
            <br />
            <SpecialtyArea
              title="Trauma Processing"
              description="Trauma processing is about understanding and addressing traumatic experiences, building emotional regulation skills, and fostering a renewed sense of self. My approach emphasizes reconnecting with your mind, body, and emotions in a safe and supportive space. Together, we work at your own pace to develop effective coping strategies and restore a sense of safety, control, and balance in your life."
            />
            <br />
            <SpecialtyArea
              title="Anxiety and Mood"
              description="Managing the ups and downs of mood dysregulation can be overwhelming, and it&apos;s not something you can simply think your way out of. Whether you&apos;re navigating anxiety, depression, or a bipolar diagnosis, we work together to identify unhelpful thinking patterns, improve emotional regulation, and build acceptance for what lies outside your control."
            />
            {/* <br />
            <SpecialtyArea
              title="Grief and Loss"
              description="Dealing with grief and loss can be an overwhelming experience. We provide compassionate support to help you navigate the complex emotions associated with loss, whether it's the death of a loved one, the end of a relationship, or any significant life change. Our approach honors your unique grieving process and helps you find meaning and healing."
            /> */}
            <br />
            <SpecialtyArea
              title="Neurodiversity"
              description={
                <>
                  <p>
                    Neurodiversity is a broad term that encompasses the various ways people&apos;s brains function. Each brain is unique, and no two work exactly the same. Being neurodivergent means having a brain that operates differently from what is considered typical or neurotypical. While neurodivergence is not inherently negative, it can bring significant challenges and frustrations. It may feel as though everyone else has access to an unspoken rulebook for socializing and interacting that you were never given.
                  </p>
                  <p className="mt-4">
                    Through neurodivergent-affirming care, we focus on your strengths while addressing the unique challenges of navigating a world designed for neurotypical individuals. Therapy can support you in improving communication with yourself and others, all while embracing and celebrating your differences.
                  </p>
                </>
              }
            />
            <br />
            <SpecialtyArea
              title="Recovery"
              description="
Whether you&apos;re in the early stages of recovery or have been navigating it for some time, we will work together to address substance use and other addictive behaviors. Together, we&apos;ll focus on understanding what drives these behaviors, creating tools to manage challenges, and building a personalized plan to maintain stability and prevent or navigate relapse"
            />
            <br />
            <SpecialtyArea
              title="Relationships"
              description="Relationships, whether traditional or non-traditional, are at the heart of our lives but can also bring unique challenges. By exploring your patterns, communication styles, and emotional needs, we can identify areas for growth, develop healthier coping mechanisms, and gain meaningful insight into how past experiences may influence your current dynamics."
            />
          </div>
        </section>

        {/* Therapy Methods Section */}
        <section className="py-24 bg-simpson-hero">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl text-simpson-blue font-light mb-16 text-center">
              Therapy Methods
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <TherapyMethod
                title="CBT"
                description="When navigating emotional challenges, it can be helpful to understand how your thoughts influence your feelings and behaviors. Cognitive Behavioral Therapy (CBT) is a proven, evidence-based approach that emphasizes the connection between these three areas. Together, we identify and challenge unhelpful thought patterns, replacing them with more balanced and constructive perspectives. This approach is especially effective in addressing anxiety, depression, and a range of mood disorders, fostering greater emotional well-being."
              />
              <TherapyMethod
                title="ACT"
                description="Focusing on things beyond your control can drain your emotional and mental energy. Through Acceptance and Commitment Therapy (ACT), we work together to uncover unhelpful thought patterns that may be keeping you stuck in behaviors that once served you but no longer align with your goals. ACT helps you cultivate acceptance for what lies outside your influence while empowering you to take meaningful steps toward positive change in areas you can impact."
              />
              <TherapyMethod
                title="TF-CBT"
                description="Trauma can deeply impact the way we think, feel, and interact with the world, often leaving us feeling stuck in distressing patterns. Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) is an evidence-based approach designed to help individuals process and heal from trauma. It combines trauma-sensitive techniques with cognitive-behavioral strategies to address unhelpful thought patterns, reduce distress, and build emotional regulation skills. TF-CBT is particularly effective for children, adolescents, and their caregivers, offering a structured yet flexible framework to navigate recovery and rebuild a sense of safety."
              />
              <TherapyMethod
                title="Narrative Therapy"
                description="
               The stories we tell ourselves about our experiences shape how we see ourselves and the world around us. Narrative Therapy empowers individuals to rewrite their stories, focusing on their strengths and resilience rather than solely on the trauma. By externalizing problems and exploring alternative narratives, this approach helps clients separate their identity from their experiences. Through collaborative storytelling, clients gain greater clarity, control, and meaning in their lives, enabling them to move forward with confidence and self-compassion."
                  />
                  <TherapyMethod
                  title="DBT"
                  description="When emotions feel overwhelming and difficult to manage, having practical tools can make a meaningful difference. Dialectical Behavior Therapy (DBT) is an evidence-based approach that combines mindfulness with skills for emotional regulation, distress tolerance, and interpersonal effectiveness. In DBT-focused sessions, we work together to develop healthier coping strategies, build emotional resilience, and navigate challenging situations with greater confidence and balance."
                />
                <TherapyMethod
                  title="IFS"
                  description="
                    Healing often requires understanding the inner dynamics that influence your thoughts, feelings, and behaviors. In IFS-focused therapy sessions, we explore the different parts of you—each with its own emotions, roles, and perspectives—to better understand your inner experiences. Together, we build a connection with your core Self, a place of calm, curiosity, and compassion, to guide the healing process. These sessions create space to release burdens carried by wounded parts and restore balance, helping you feel more integrated and aligned with your true self."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function TherapyMethod({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl text-simpson-blue font-light mb-4">{title}</h3>
      <p className="text-simpson-blue-light leading-relaxed">{description}</p>
    </div>
  )
}
