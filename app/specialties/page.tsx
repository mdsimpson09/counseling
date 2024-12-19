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
                title="EMDR + Brainspotting"
                description="EMDR (Eye Movement Desensitization and Reprocessing) and Brainspotting (BSP) can be used to process unhealed trauma in your brain. Using bilateral stimulation (such as sounds or eye movements), your brain is guided through distressing physical sensations and given a path towards healing. When you fully heal, you are able to recall previously distressing memories without overwhelming emotions, negative feelings towards self, or intense physical responses. EMDR and BSP are extensively researched and proven to be an effective treatment for trauma, anxiety, and PTSD."
              />
              <TherapyMethod
                title="ACT"
                description="Expending energy on things you cannot control leaves you feeling emotionally and mentally exhausted. Using ACT (Acceptance and Commitment Therapy), we identify how unhelpful thinking styles may be convincing you to stay in old patterns of behavior that may have been protective in the past but are no longer serving you. You can discover acceptance for things outside of your control and take meaningful action on things you are capable of changing."
              />
              <TherapyMethod
                title="CBT"
                description="Cognitive Behavioral Therapy (CBT) is a widely used and evidence-based approach that focuses on the interconnection between thoughts, feelings, and behaviors. By identifying and challenging negative thought patterns, we work together to develop more balanced and realistic perspectives. This method is particularly effective for managing anxiety, depression, and various mood disorders."
              />
              <TherapyMethod
                title="Mindfulness-Based Therapy"
                description="Incorporating mindfulness techniques into therapy helps you develop greater awareness of your thoughts and emotions without judgment. This approach can reduce stress, improve focus, and enhance overall well-being. We use various mindfulness practices to help you stay grounded in the present moment and develop a more compassionate relationship with yourself."
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
