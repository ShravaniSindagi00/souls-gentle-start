import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, ArrowLeft, Share2, Heart } from 'lucide-react'

const blogPosts = {
  'understanding-anxiety-breaking-free': {
    title: 'Understanding Anxiety: Breaking Free from the Grip of Fear',
    author: 'Dr. Sarah Johnson',
    date: '2025-09-04',
    readTime: '8 min read',
    category: 'Mental Health',
    content: `
      <p>Anxiety is more than just feeling nervous before a big presentation or worried about a challenging situation. For millions of people worldwide, anxiety can become an overwhelming force that dictates daily decisions and limits life experiences. But understanding anxiety is the first powerful step toward breaking free from its grip.</p>
      
      <h2>What is Anxiety?</h2>
      <p>Anxiety is our body's natural alarm system—a response designed to protect us from danger. When we perceive a threat, our brain triggers a cascade of physical and emotional reactions to help us either fight, flee, or freeze. This response can be lifesaving in genuinely dangerous situations.</p>
      
      <p>However, anxiety becomes problematic when this alarm system activates inappropriately or excessively, responding to situations that aren't truly threatening. When anxiety interferes with daily activities, relationships, or overall quality of life, it may be classified as an anxiety disorder.</p>
      
      <h2>Types of Anxiety Disorders</h2>
      
      <h3>Generalized Anxiety Disorder (GAD)</h3>
      <p>People with GAD experience persistent, excessive worry about various aspects of life—work, health, family, finances. This worry is difficult to control and often feels disproportionate to the actual situation. Physical symptoms may include restlessness, fatigue, muscle tension, and sleep disturbances.</p>
      
      <h3>Social Anxiety Disorder</h3>
      <p>Social anxiety involves intense fear of social situations where one might be judged, embarrassed, or scrutinized by others. This can range from fear of public speaking to anxiety about eating in front of others or using public restrooms. Physical symptoms often include blushing, sweating, trembling, or nausea in social situations.</p>
      
      <h3>Panic Disorder</h3>
      <p>Panic disorder is characterized by recurring panic attacks—sudden episodes of intense fear accompanied by physical symptoms like rapid heartbeat, shortness of breath, dizziness, or chest pain. These attacks often feel like a heart attack or other medical emergency, leading to ongoing fear of having another attack.</p>
      
      <h3>Specific Phobias</h3>
      <p>Phobias involve intense, irrational fear of specific objects, situations, or activities. Common phobias include fear of heights (acrophobia), flying (aviophobia), spiders (arachnophobia), or enclosed spaces (claustrophobia). The fear is typically disproportionate to the actual danger posed.</p>
      
      <h3>Obsessive-Compulsive Disorder (OCD)</h3>
      <p>OCD involves unwanted, intrusive thoughts (obsessions) that create anxiety, leading to repetitive behaviors or mental acts (compulsions) performed to reduce that anxiety. Common obsessions include fears about contamination, harm, or symmetry, while compulsions might involve excessive hand washing, checking, or arranging.</p>
      
      <h2>Understanding the Causes</h2>
      
      <h3>Brain Chemistry</h3>
      <p>Neurotransmitters like serotonin, dopamine, and GABA play crucial roles in mood regulation. Imbalances in these brain chemicals can contribute to anxiety disorders. Understanding this helps reduce self-blame—anxiety isn't a character flaw or personal weakness.</p>
      
      <h3>Genetics</h3>
      <p>Research shows that anxiety disorders can run in families, suggesting a genetic component. Having a family member with anxiety doesn't guarantee you'll develop it, but it may increase your susceptibility.</p>
      
      <h3>Trauma and Life Experiences</h3>
      <p>Traumatic events, chronic stress, or significant life changes can trigger anxiety disorders. This might include childhood trauma, abuse, accidents, loss of a loved one, or major life transitions like divorce or job loss.</p>
      
      <h3>Chronic Stress</h3>
      <p>Prolonged exposure to stress can dysregulate our nervous system, making us more prone to anxiety. Modern life's constant demands can keep our stress response system in overdrive.</p>
      
      <h2>Practical Management Strategies</h2>
      
      <h3>Grounding Techniques</h3>
      <p>When anxiety strikes, grounding techniques can help bring you back to the present moment:</p>
      <ul>
        <li><strong>5-4-3-2-1 Technique:</strong> Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste</li>
        <li><strong>Box Breathing:</strong> Inhale for 4 counts, hold for 4, exhale for 4, hold for 4</li>
        <li><strong>Progressive Muscle Relaxation:</strong> Tense and release different muscle groups systematically</li>
      </ul>
      
      <h3>Challenging Anxious Thoughts</h3>
      <p>Anxiety often involves catastrophic thinking or overestimating danger. Learn to:</p>
      <ul>
        <li>Question the evidence for your anxious thoughts</li>
        <li>Consider alternative, more balanced perspectives</li>
        <li>Ask yourself: "What would I tell a friend in this situation?"</li>
        <li>Focus on what you can control rather than what you can't</li>
      </ul>
      
      <h3>Regular Exercise</h3>
      <p>Physical activity is one of the most effective natural anxiety reducers. Exercise releases endorphins, reduces stress hormones, and provides a healthy outlet for nervous energy. Even a 10-minute walk can make a difference.</p>
      
      <h3>Limiting Anxiety Triggers</h3>
      <p>While avoidance isn't always healthy, strategically limiting certain triggers can help:</p>
      <ul>
        <li>Reduce caffeine intake, especially if you're sensitive</li>
        <li>Limit news consumption or social media if they increase anxiety</li>
        <li>Establish boundaries with stressful people or situations when possible</li>
        <li>Create calming environments in your home and workspace</li>
      </ul>
      
      <h3>Mindfulness and Meditation</h3>
      <p>Regular mindfulness practice can help you observe anxious thoughts without being overwhelmed by them. Start with just 5 minutes daily, focusing on your breath or using guided meditation apps.</p>
      
      <h2>Building Your Support System</h2>
      <p>Recovery from anxiety rarely happens in isolation. Building a strong support system is crucial:</p>
      <ul>
        <li>Share your experiences with trusted friends or family members</li>
        <li>Consider joining support groups, either in-person or online</li>
        <li>Work with a mental health professional who specializes in anxiety</li>
        <li>Explore therapy options like Cognitive Behavioral Therapy (CBT) or Exposure Therapy</li>
      </ul>
      
      <h2>When to Seek Professional Help</h2>
      <p>Consider reaching out to a mental health professional if:</p>
      <ul>
        <li>Anxiety interferes with work, school, or relationships</li>
        <li>You avoid situations or activities you once enjoyed</li>
        <li>Physical symptoms are concerning or persistent</li>
        <li>You're using alcohol or substances to manage anxiety</li>
        <li>Suicidal thoughts occur</li>
      </ul>
      
      <h2>Hope and Healing</h2>
      <p>Remember, anxiety is highly treatable. With the right combination of strategies, support, and sometimes professional treatment, you can learn to manage anxiety effectively and reclaim your life. Breaking free from anxiety's grip takes time and patience, but every small step forward is a victory worth celebrating.</p>
      
      <p>You are not defined by your anxiety. You are a complete person who happens to experience anxiety, and with understanding, tools, and support, you can learn to navigate life with greater peace and confidence.</p>
    `,
  },
  'mastering-stress-ultimate-guide': {
    title: 'Mastering Stress: Your Ultimate Guide to Finding Balance',
    author: 'Dr. Michael Chen',
    date: '2025-09-03',
    readTime: '10 min read',
    category: 'Stress Management',
    content: `
      <p>In our fast-paced world, stress has become an unwelcome constant companion for many of us. From work deadlines to family responsibilities, financial pressures to health concerns, modern life presents a continuous stream of stressors. But stress doesn't have to control your life. With the right understanding and tools, you can master stress and create a more balanced, fulfilling existence.</p>
      
      <h2>Understanding Stress: The Good, The Bad, and The Overwhelming</h2>
      <p>Stress isn't inherently bad. In fact, some stress—called "eustress"—can be beneficial, motivating us to perform well and adapt to challenges. The problem arises when stress becomes chronic, overwhelming, or when we lack effective coping strategies.</p>
      
      <p>When we perceive a threat or challenge, our body activates the "fight-or-flight" response, releasing hormones like cortisol and adrenaline. This response is perfect for immediate physical dangers but becomes problematic when activated repeatedly by modern stressors like traffic, work pressure, or relationship conflicts.</p>
      
      <h2>Recognizing Stress Symptoms</h2>
      
      <h3>Physical Symptoms</h3>
      <ul>
        <li>Headaches and muscle tension</li>
        <li>Fatigue and sleep disturbances</li>
        <li>Changes in appetite or weight</li>
        <li>Digestive issues</li>
        <li>Frequent illnesses due to weakened immunity</li>
        <li>High blood pressure</li>
        <li>Chest pain or rapid heartbeat</li>
      </ul>
      
      <h3>Emotional Symptoms</h3>
      <ul>
        <li>Irritability and mood swings</li>
        <li>Anxiety and restlessness</li>
        <li>Feeling overwhelmed or out of control</li>
        <li>Depression or sadness</li>
        <li>Lack of motivation or focus</li>
        <li>Feeling isolated or withdrawn</li>
      </ul>
      
      <h3>Behavioral Symptoms</h3>
      <ul>
        <li>Changes in eating habits (over or under-eating)</li>
        <li>Increased use of alcohol, drugs, or tobacco</li>
        <li>Social withdrawal</li>
        <li>Procrastination or neglecting responsibilities</li>
        <li>Nervous habits (nail biting, pacing)</li>
        <li>Aggression or angry outbursts</li>
      </ul>
      
      <h2>The Science Behind Stress</h2>
      <p>Understanding what happens in your body during stress can help you respond more effectively. When you encounter a stressor, your brain's hypothalamus signals your adrenal glands to release cortisol and adrenaline. These hormones:</p>
      
      <ul>
        <li>Increase heart rate and blood pressure</li>
        <li>Boost energy supplies</li>
        <li>Sharpen focus and alertness</li>
        <li>Suppress non-essential functions like digestion and immune response</li>
      </ul>
      
      <p>While this response is helpful in emergencies, chronic activation can lead to serious health problems including cardiovascular disease, diabetes, depression, and compromised immune function.</p>
      
      <h2>Comprehensive Stress Management Strategies</h2>
      
      <h3>1. Breathing Exercises: Your Portable Stress Relief</h3>
      <p>Proper breathing is one of the fastest ways to activate your body's relaxation response:</p>
      
      <h4>Deep Belly Breathing</h4>
      <ol>
        <li>Sit or lie down comfortably</li>
        <li>Place one hand on your chest, one on your belly</li>
        <li>Breathe slowly through your nose, ensuring your belly rises more than your chest</li>
        <li>Exhale slowly through your mouth</li>
        <li>Continue for 5-10 minutes</li>
      </ol>
      
      <h4>4-7-8 Breathing</h4>
      <ol>
        <li>Inhale through your nose for 4 counts</li>
        <li>Hold your breath for 7 counts</li>
        <li>Exhale through your mouth for 8 counts</li>
        <li>Repeat 3-4 times</li>
      </ol>
      
      <h3>2. Movement and Exercise: Natural Stress Busters</h3>
      <p>Physical activity is one of the most effective stress management tools available:</p>
      
      <ul>
        <li><strong>Aerobic Exercise:</strong> Running, cycling, or dancing releases endorphins and reduces cortisol levels</li>
        <li><strong>Strength Training:</strong> Builds physical resilience and provides a sense of accomplishment</li>
        <li><strong>Yoga:</strong> Combines movement, breathing, and mindfulness for comprehensive stress relief</li>
        <li><strong>Nature Walks:</strong> Combine exercise with the stress-reducing benefits of nature</li>
        <li><strong>Dance or Martial Arts:</strong> Provide both physical activity and emotional expression</li>
      </ul>
      
      <p>Even 10 minutes of movement can significantly reduce stress levels. The key is consistency rather than intensity.</p>
      
      <h3>3. Setting Healthy Boundaries</h3>
      <p>Many people experience stress because they overcommit or struggle to say no. Setting boundaries is essential:</p>
      
      <ul>
        <li><strong>Learn to say no:</strong> You don't have to justify every "no" with a lengthy explanation</li>
        <li><strong>Prioritize tasks:</strong> Use systems like the Eisenhower Matrix to focus on what's truly important</li>
        <li><strong>Delegate when possible:</strong> You don't have to do everything yourself</li>
        <li><strong>Set work boundaries:</strong> Establish clear start and stop times for work-related activities</li>
        <li><strong>Limit technology:</strong> Create device-free zones and times in your day</li>
      </ul>
      
      <h3>4. Mindfulness and Present-Moment Awareness</h3>
      <p>Stress often comes from worrying about the future or ruminating about the past. Mindfulness brings you back to the present:</p>
      
      <h4>Simple Mindfulness Practices</h4>
      <ul>
        <li><strong>Mindful eating:</strong> Pay attention to tastes, textures, and sensations while eating</li>
        <li><strong>Body scan meditation:</strong> Systematically notice sensations throughout your body</li>
        <li><strong>Mindful walking:</strong> Focus on the sensation of your feet touching the ground</li>
        <li><strong>Single-tasking:</strong> Give your full attention to one activity at a time</li>
      </ul>
      
      <h3>5. Social Connection and Support</h3>
      <p>Humans are social beings, and isolation can increase stress. Building and maintaining connections is crucial:</p>
      
      <ul>
        <li>Schedule regular time with friends and family</li>
        <li>Join clubs or groups based on your interests</li>
        <li>Volunteer for causes you care about</li>
        <li>Consider professional counseling or support groups</li>
        <li>Practice open, honest communication in your relationships</li>
      </ul>
      
      <h3>6. Comprehensive Self-Care</h3>
      <p>Self-care isn't selfish—it's essential for managing stress effectively:</p>
      
      <h4>Physical Self-Care</h4>
      <ul>
        <li>Maintain regular sleep schedules (7-9 hours per night)</li>
        <li>Eat nutritious, balanced meals</li>
        <li>Stay hydrated</li>
        <li>Limit caffeine and alcohol</li>
        <li>Get regular medical check-ups</li>
      </ul>
      
      <h4>Emotional Self-Care</h4>
      <ul>
        <li>Practice self-compassion and positive self-talk</li>
        <li>Engage in activities you enjoy</li>
        <li>Express emotions through journaling, art, or music</li>
        <li>Set realistic expectations for yourself</li>
        <li>Celebrate small victories</li>
      </ul>
      
      <h4>Mental Self-Care</h4>
      <ul>
        <li>Engage in learning new skills or hobbies</li>
        <li>Practice gratitude daily</li>
        <li>Limit negative media consumption</li>
        <li>Challenge negative thought patterns</li>
        <li>Practice mindfulness or meditation</li>
      </ul>
      
      <h2>Creating Your Personal Stress Management Plan</h2>
      <p>Effective stress management is highly individual. What works for one person may not work for another. Consider these steps to create your personalized plan:</p>
      
      <ol>
        <li><strong>Identify your stress triggers:</strong> Keep a stress diary to notice patterns</li>
        <li><strong>Assess your current coping strategies:</strong> Which ones help? Which ones might be harmful?</li>
        <li><strong>Choose 2-3 new strategies to try:</strong> Start small and build gradually</li>
        <li><strong>Practice consistently:</strong> Daily small actions are more effective than sporadic intense efforts</li>
        <li><strong>Monitor your progress:</strong> Notice what's working and adjust as needed</li>
        <li><strong>Be patient with yourself:</strong> Developing new habits takes time</li>
      </ol>
      
      <h2>When to Seek Professional Help</h2>
      <p>While self-help strategies are valuable, sometimes professional support is necessary. Consider seeking help if:</p>
      
      <ul>
        <li>Stress significantly interferes with work, relationships, or daily activities</li>
        <li>You're using alcohol, drugs, or other harmful substances to cope</li>
        <li>You experience persistent physical symptoms</li>
        <li>You feel hopeless or have thoughts of self-harm</li>
        <li>Your sleep, appetite, or energy levels are severely affected</li>
      </ul>
      
      <h2>Building Long-Term Resilience</h2>
      <p>Mastering stress isn't about eliminating it entirely—it's about building resilience and developing healthy responses to life's inevitable challenges. Remember:</p>
      
      <ul>
        <li>Stress management is a skill that improves with practice</li>
        <li>Small, consistent changes create significant long-term benefits</li>
        <li>It's okay to have difficult days—progress isn't always linear</li>
        <li>Your mental health is just as important as your physical health</li>
        <li>Seeking help is a sign of strength, not weakness</li>
      </ul>
      
      <p>By implementing these strategies and maintaining a commitment to your well-being, you can transform your relationship with stress and create a more balanced, fulfilling life. Remember, you have more control over your stress response than you might think—and every step you take toward better stress management is an investment in your overall health and happiness.</p>
    `,
  },
  'unmasking-depression-silent-storm': {
    title: 'Unmasking Depression: The Silent Storm Within',
    author: 'Dr. Emily Rodriguez',
    date: '2025-09-02',
    readTime: '12 min read',
    category: 'Mental Health',
    content: `
      <p>Depression is often called the "silent storm" because it can rage within someone while remaining largely invisible to the outside world. Unlike a broken bone or a physical illness, depression doesn't always show obvious external signs, making it one of the most misunderstood and stigmatized mental health conditions. Today, we're going to unmask depression—understanding its hidden nature, breaking down harmful myths, and most importantly, illuminating the path toward healing and hope.</p>
      
      <h2>Understanding Depression: More Than Just Sadness</h2>
      <p>Depression is far more complex and debilitating than simply feeling sad or having a bad day. It's a serious mental health condition that affects how you think, feel, and handle daily activities. Clinical depression, also known as Major Depressive Disorder, involves persistent feelings of sadness, hopelessness, and loss of interest that last for at least two weeks and significantly impact daily functioning.</p>
      
      <p>Depression affects more than 264 million people worldwide, making it one of the leading causes of disability globally. Yet despite its prevalence, depression remains shrouded in silence, shame, and misunderstanding.</p>
      
      <h2>The Hidden Signs of Depression</h2>
      <p>Depression often wears many masks, and its symptoms can be subtle, making it difficult to recognize—both for those experiencing it and their loved ones.</p>
      
      <h3>Emotional Signs</h3>
      <ul>
        <li><strong>Persistent sadness or emptiness:</strong> A feeling that won't lift, often described as a heavy darkness</li>
        <li><strong>Loss of interest or pleasure:</strong> Activities you once enjoyed feel meaningless or overwhelming</li>
        <li><strong>Hopelessness:</strong> Feeling like things will never get better</li>
        <li><strong>Guilt and worthlessness:</strong> Harsh self-criticism and feeling like a burden to others</li>
        <li><strong>Irritability:</strong> Small frustrations feel overwhelming and trigger disproportionate anger</li>
        <li><strong>Emotional numbness:</strong> Feeling disconnected from emotions, like watching life through a foggy window</li>
      </ul>
      
      <h3>Physical Signs</h3>
      <ul>
        <li><strong>Sleep disturbances:</strong> Insomnia, early morning awakening, or sleeping too much</li>
        <li><strong>Appetite changes:</strong> Significant weight loss or gain</li>
        <li><strong>Fatigue:</strong> Persistent exhaustion that rest doesn't relieve</li>
        <li><strong>Physical aches:</strong> Unexplained headaches, back pain, or muscle tension</li>
        <li><strong>Slowed movement or restlessness:</strong> Feeling like you're moving through molasses or unable to sit still</li>
      </ul>
      
      <h3>Cognitive Signs</h3>
      <ul>
        <li><strong>Difficulty concentrating:</strong> Simple tasks feel overwhelming and complex</li>
        <li><strong>Memory problems:</strong> Forgetfulness and difficulty retaining information</li>
        <li><strong>Indecisiveness:</strong> Even small decisions feel impossible</li>
        <li><strong>Negative thought patterns:</strong> Catastrophic thinking and focusing on worst-case scenarios</li>
        <li><strong>Suicidal thoughts:</strong> Thoughts of death, dying, or self-harm</li>
      </ul>
      
      <h3>Behavioral Signs</h3>
      <ul>
        <li><strong>Social withdrawal:</strong> Isolating from friends, family, and activities</li>
        <li><strong>Neglecting responsibilities:</strong> Work, school, or home obligations feel insurmountable</li>
        <li><strong>Self-medication:</strong> Increased use of alcohol, drugs, or other substances</li>
        <li><strong>Decreased personal care:</strong> Difficulty maintaining hygiene or appearance</li>
        <li><strong>Avoidance behaviors:</strong> Staying in bed, avoiding phone calls, canceling plans</li>
      </ul>
      
      <h2>The Science Behind Depression</h2>
      <p>Depression isn't a character flaw or personal weakness—it's a legitimate medical condition with complex biological, psychological, and social causes.</p>
      
      <h3>Brain Chemistry</h3>
      <p>Depression involves imbalances in neurotransmitters—brain chemicals that regulate mood, sleep, appetite, and energy. Key neurotransmitters include:</p>
      <ul>
        <li><strong>Serotonin:</strong> Affects mood, sleep, and appetite</li>
        <li><strong>Dopamine:</strong> Involved in motivation, pleasure, and reward</li>
        <li><strong>Norepinephrine:</strong> Affects energy, attention, and arousal</li>
      </ul>
      
      <h3>Genetic Factors</h3>
      <p>Depression can run in families, suggesting a genetic component. Having a family member with depression increases your risk, but genetics aren't destiny—many people with genetic predisposition never develop depression.</p>
      
      <h3>Environmental Triggers</h3>
      <ul>
        <li>Traumatic life events (loss, abuse, accidents)</li>
        <li>Chronic stress or ongoing life difficulties</li>
        <li>Medical conditions or medications</li>
        <li>Substance abuse</li>
        <li>Major life changes (divorce, job loss, retirement)</li>
        <li>Seasonal changes (Seasonal Affective Disorder)</li>
      </ul>
      
      <h2>Breaking Down Harmful Myths</h2>
      <p>Misconceptions about depression contribute to stigma and prevent people from seeking help. Let's dispel some common myths:</p>
      
      <h3>Myth: "Depression is just sadness—everyone gets sad sometimes."</h3>
      <p><strong>Truth:</strong> Depression is a persistent, pervasive condition that affects all aspects of life. Unlike normal sadness, depression doesn't lift with time or positive events.</p>
      
      <h3>Myth: "People with depression are weak or lack willpower."</h3>
      <p><strong>Truth:</strong> Depression is a medical condition, not a personal failing. Many successful, strong individuals experience depression.</p>
      
      <h3>Myth: "If you have depression, you'll always have it."</h3>
      <p><strong>Truth:</strong> Depression is highly treatable. With proper treatment, most people recover completely or learn to manage symptoms effectively.</p>
      
      <h3>Myth: "Antidepressants are the only treatment for depression."</h3>
      <p><strong>Truth:</strong> While medications can be helpful, therapy, lifestyle changes, and other treatments are equally effective for many people.</p>
      
      <h3>Myth: "Therapy is only for people who are 'really sick.'"</h3>
      <p><strong>Truth:</strong> Therapy is beneficial for anyone struggling with mental health, regardless of the severity of symptoms.</p>
      
      <h2>Recovery Strategies: Climbing Out of the Storm</h2>
      
      <h3>1. Start Small: The Power of Tiny Steps</h3>
      <p>When you're depressed, everything feels overwhelming. The key is to start with tiny, manageable actions:</p>
      <ul>
        <li>Set a goal to shower or brush your teeth</li>
        <li>Step outside for five minutes</li>
        <li>Make your bed</li>
        <li>Call or text one person</li>
        <li>Listen to one favorite song</li>
      </ul>
      <p>These might seem insignificant, but they create momentum and prove to your brain that you can accomplish things.</p>
      
      <h3>2. Seeking Connection: You Don't Have to Suffer Alone</h3>
      <p>Depression tells you to isolate, but connection is crucial for healing:</p>
      <ul>
        <li><strong>Reach out to trusted friends or family:</strong> Even if you don't feel like talking, simply being around others can help</li>
        <li><strong>Join support groups:</strong> Connecting with others who understand can reduce isolation</li>
        <li><strong>Consider peer support:</strong> Online communities can provide 24/7 connection</li>
        <li><strong>Maintain routines with others:</strong> Regular coffee dates or walks with friends provide structure and connection</li>
      </ul>
      
      <h3>3. Professional Support: The Healing Power of Therapy</h3>
      <p>Therapy provides tools, insights, and support that are difficult to achieve alone:</p>
      
      <h4>Cognitive Behavioral Therapy (CBT)</h4>
      <p>Helps identify and change negative thought patterns and behaviors that contribute to depression.</p>
      
      <h4>Interpersonal Therapy (IPT)</h4>
      <p>Focuses on improving relationships and social functioning to help relieve symptoms.</p>
      
      <h4>Dialectical Behavior Therapy (DBT)</h4>
      <p>Teaches skills for managing emotions, tolerating distress, and improving relationships.</p>
      
      <h4>Mindfulness-Based Therapies</h4>
      <p>Incorporate meditation and mindfulness practices to help break cycles of negative thinking.</p>
      
      <h3>4. Movement as Medicine</h3>
      <p>Exercise is one of the most effective natural treatments for depression:</p>
      <ul>
        <li><strong>Start small:</strong> Even a 5-minute walk can boost mood</li>
        <li><strong>Choose enjoyable activities:</strong> Dancing, swimming, hiking—movement should feel good</li>
        <li><strong>Exercise with others:</strong> Group fitness classes or walking with friends adds social connection</li>
        <li><strong>Be consistent:</strong> Regular, moderate exercise is more beneficial than sporadic intense workouts</li>
      </ul>
      
      <h3>5. Celebrating Small Wins</h3>
      <p>Depression makes it hard to recognize progress. Actively celebrating small accomplishments is crucial:</p>
      <ul>
        <li>Keep a daily accomplishment journal</li>
        <li>Acknowledge efforts, not just outcomes</li>
        <li>Share wins with supportive friends or family</li>
        <li>Reward yourself for progress</li>
        <li>Remember: getting out of bed on a difficult day is an achievement</li>
      </ul>
      
      <h2>Supporting a Loved One with Depression</h2>
      <p>If someone you care about is struggling with depression, your support can make a significant difference:</p>
      
      <h3>Do:</h3>
      <ul>
        <li>Listen without judgment</li>
        <li>Offer specific help ("Can I bring dinner Tuesday?")</li>
        <li>Be patient with their recovery process</li>
        <li>Encourage professional help</li>
        <li>Learn about depression to understand their experience</li>
        <li>Take care of yourself too</li>
      </ul>
      
      <h3>Don't:</h3>
      <ul>
        <li>Say "just think positive" or "snap out of it"</li>
        <li>Take their behavior personally</li>
        <li>Try to "fix" them</li>
        <li>Give up if they don't respond immediately</li>
        <li>Ignore warning signs of suicide</li>
      </ul>
      
      <h2>Warning Signs of Suicide</h2>
      <p>Depression can sometimes lead to thoughts of suicide. Take these warning signs seriously:</p>
      <ul>
        <li>Talking about death, dying, or suicide</li>
        <li>Giving away possessions</li>
        <li>Sudden improvement after severe depression (can indicate a plan)</li>
        <li>Increased use of alcohol or drugs</li>
        <li>Extreme mood swings</li>
        <li>Withdrawing from friends and family</li>
        <li>Taking risks that could lead to death</li>
      </ul>
      
      <p><strong>If you or someone you know is in immediate danger, call emergency services (911) or the National Suicide Prevention Lifeline: 988</strong></p>
      
      <h2>Building a Life Beyond Depression</h2>
      <p>Recovery from depression isn't just about returning to how things were—it's an opportunity to build a more resilient, fulfilling life:</p>
      
      <h3>Developing Emotional Intelligence</h3>
      <p>Learn to recognize, understand, and manage your emotions more effectively.</p>
      
      <h3>Creating Meaning and Purpose</h3>
      <p>Engage in activities that align with your values and give your life meaning.</p>
      
      <h3>Building Resilience</h3>
      <p>Develop coping skills and support systems that help you navigate future challenges.</p>
      
      <h3>Practicing Self-Compassion</h3>
      <p>Treat yourself with the same kindness you'd offer a good friend.</p>
      
      <h2>A Message of Hope</h2>
      <p>If you're reading this while struggling with depression, please know: you are not alone, you are not broken, and you are not hopeless. Depression may be the storm you're weathering right now, but storms do pass. With the right support, treatment, and self-care strategies, you can not only survive this storm but emerge stronger.</p>
      
      <p>Recovery takes time, and it's rarely linear. There will be good days and difficult days, but each step forward—no matter how small—is progress. You deserve support, understanding, and healing. You deserve to feel joy again.</p>
      
      <p>Depression has taken enough from you. It's time to start taking your life back, one small, brave step at a time.</p>
    `,
  },
  'oursouls-first-event-reflection': {
    title:
      "Reflecting on OurSouls' First Event – A Powerful Day of Mental Health and Wellness!",
    author: 'OurSouls Team',
    date: '2025-09-01',
    readTime: '6 min read',
    category: 'Community',
    content: `
      <p>What an incredible day it was! On August 28th, 2025, OurSouls hosted our very first mental health and wellness event at the prestigious KLE Institute of Technology, and we're still buzzing with excitement and gratitude from the overwhelming response and positive energy that filled the venue.</p>
      
      <h2>A Vision Becomes Reality</h2>
      <p>When we first envisioned OurSouls, our mission was clear: to break down barriers to mental health support and create a community where everyone feels seen, heard, and valued. Our inaugural event represented the first major step in bringing this vision to life, and seeing over 200 students, faculty, and community members come together to prioritize mental wellness was nothing short of inspiring.</p>
      
      <h2>Keynote: Breaking the Silence</h2>
      <p>The day began with a powerful keynote address by Dr. Priya Sharma, a senior psychologist with over 15 years of experience in adolescent and young adult mental health. Dr. Sharma's presentation, titled "Breaking the Silence: Mental Health in the Digital Age," addressed the unique challenges facing today's generation.</p>
      
      <p>Key highlights from her presentation included:</p>
      <ul>
        <li><strong>The Digital Paradox:</strong> How social media connects us globally while sometimes isolating us locally</li>
        <li><strong>Academic Pressure Realities:</strong> Understanding the mental health impact of competitive educational environments</li>
        <li><strong>The Power of Vulnerability:</strong> Why sharing our struggles makes us stronger, not weaker</li>
        <li><strong>Building Digital Wellness:</strong> Practical strategies for healthy technology use</li>
      </ul>
      
      <p>Dr. Sharma's candid discussion about her own mental health journey resonated deeply with attendees. "The most healing thing you can do," she shared, "is realize you're not alone in your struggles. Today, we're creating a space where that healing can begin."</p>
      
      <h2>Interactive Workshops: Learning Through Experience</h2>
      <p>The afternoon featured rotating workshops designed to provide hands-on experience with mental wellness techniques:</p>
      
      <h3>Mindfulness & Meditation Circle</h3>
      <p>Led by certified mindfulness instructor Raj Patel, this session introduced participants to practical meditation techniques they could use in their daily lives. The 20-minute guided meditation left the room noticeably calmer and more centered.</p>
      
      <h3>Stress-Busting Art Therapy</h3>
      <p>Our art therapy session, facilitated by creative therapist Anita Desai, allowed participants to express emotions through color, shape, and creativity. Many attendees were amazed at what they discovered about themselves through their artistic expressions.</p>
      
      <h3>Building Resilience Through Connection</h3>
      <p>This group activity focused on developing support networks and communication skills. Participants practiced active listening, empathy exercises, and learned how to offer meaningful support to friends and family members struggling with mental health challenges.</p>
      
      <h3>Cognitive Behavioral Techniques for Students</h3>
      <p>Our licensed counselor, Vikram Singh, led this practical workshop on identifying and challenging negative thought patterns. Students learned the "STOP" technique and other CBT tools specifically adapted for academic and social stressors.</p>
      
      <h2>Group Activities: Breaking Down Barriers</h2>
      <p>One of the most moving parts of the day was our "Breaking Down Barriers" activity. Participants wrote down mental health myths or stigmas they'd encountered on paper "bricks," which we then ceremonially dismantled together. Some of the barriers we broke down included:</p>
      
      <ul>
        <li>"Asking for help means you're weak"</li>
        <li>"Mental health problems are just a phase"</li>
        <li>"Therapy is only for people with serious problems"</li>
        <li>"You should be able to handle everything on your own"</li>
        <li>"Talking about mental health makes things worse"</li>
      </ul>
      
      <p>As each barrier came down, applause filled the room, symbolizing our collective commitment to creating a more understanding and supportive community.</p>
      
      <h2>Personal Stories: The Heart of Healing</h2>
      <p>Perhaps the most powerful moment came during our "Courage to Share" segment, where volunteers shared their personal mental health journeys. Three brave students spoke about their experiences with anxiety, depression, and the journey to seeking help.</p>
      
      <p>Arjun, a third-year engineering student, shared: "I thought admitting I was struggling would end my career before it started. But getting help actually made me a better student and a better friend. I want others to know it's okay to not be okay."</p>
      
      <p>Meera, who spoke about her experience with social anxiety, emphasized: "This community we're building—it's not just about healing. It's about thriving. It's about being our authentic selves without fear."</p>
      
      <h2>Free Counseling Sessions: Immediate Support</h2>
      <p>True to our commitment to accessible mental health care, we offered free 30-minute counseling sessions with our team of licensed therapists. Over 50 attendees signed up for these sessions, with many expressing gratitude for the opportunity to speak with a professional in a safe, non-judgmental environment.</p>
      
      <p>The demand for these sessions reinforced what we already knew: there's a significant need for accessible mental health support in our community. Every session booked represented someone taking a brave step toward better mental health.</p>
      
      <h2>Community Feedback: Your Voices Matter</h2>
      <p>The response from our attendees was overwhelmingly positive. Here's what some participants shared:</p>
      
      <blockquote>
        <p>"I came here feeling isolated and left feeling like I'm part of something bigger. This event made me realize I'm not alone in my struggles." - Anonymous attendee</p>
      </blockquote>
      
      <blockquote>
        <p>"The practical tools I learned today are already helping me manage my stress better. Thank you for making mental health education so accessible." - Final year student</p>
      </blockquote>
      
      <blockquote>
        <p>"As a faculty member, I'm grateful for the resources to better support my students. This event has changed how I approach mental health in my classroom." - Professor, KLE Institute</p>
      </blockquote>
      
      <h2>Looking Ahead: This is Just the Beginning</h2>
      <p>Our first event exceeded our wildest expectations, but we know this is just the beginning of our journey. The connections made, stories shared, and barriers broken down have energized us to continue expanding our reach and impact.</p>
      
      <h3>What's Next?</h3>
      <ul>
        <li><strong>Monthly Community Circles:</strong> Regular support group meetings for ongoing connection and growth</li>
        <li><strong>Workplace Mental Health Program:</strong> Bringing wellness initiatives to local businesses and organizations</li>
        <li><strong>Peer Counselor Training:</strong> Empowering community members to support each other</li>
        <li><strong>Digital Mental Health Platform:</strong> Expanding our online resources and virtual support options</li>
        <li><strong>Educational Institution Partnerships:</strong> Collaborating with more schools and colleges to integrate mental health support</li>
      </ul>
      
      <h2>Extended Support: Our Promise Continues</h2>
      <p>For all attendees of our inaugural event, we're extending our free counseling session offer for an additional 30 days. Mental health support shouldn't end when an event does, and we're committed to ensuring everyone who took this brave step with us continues to have access to professional support.</p>
      
      <p>To schedule your session or learn about our ongoing programs, visit our website or reach out to our support team directly.</p>
      
      <h2>Gratitude and Recognition</h2>
      <p>This event wouldn't have been possible without the incredible support from:</p>
      <ul>
        <li><strong>KLE Institute of Technology</strong> for providing the venue and enthusiastic support</li>
        <li><strong>Our volunteer team</strong> who worked tirelessly to make every detail perfect</li>
        <li><strong>Our mental health professionals</strong> who donated their time and expertise</li>
        <li><strong>Local sponsors</strong> who believed in our mission and provided resources</li>
        <li><strong>Most importantly, every attendee</strong> who showed up, participated, and made our community stronger</li>
      </ul>
      
      <h2>The Ripple Effect</h2>
      <p>As we reflect on this powerful day, we're reminded that mental health advocacy creates ripple effects. Every person who attended will carry these messages, tools, and connections into their daily lives, potentially impacting countless others. The conversations started in our workshops will continue in dorm rooms, family dinners, and friend groups.</p>
      
      <p>This is how real change happens—not through grand gestures alone, but through individual moments of courage, connection, and compassion.</p>
      
      <h2>Join Our Growing Community</h2>
      <p>If you missed our first event, don't worry—this is just the beginning! We're building a year-round community of support, learning, and growth. Here's how you can get involved:</p>
      
      <ul>
        <li>Follow us on social media for daily mental health tips and community updates</li>
        <li>Sign up for our newsletter to be the first to know about upcoming events</li>
        <li>Join our online support community for ongoing connection</li>
        <li>Volunteer with us to help bring mental health support to more communities</li>
        <li>Share your story to help others feel less alone</li>
      </ul>
      
      <h2>A Final Thought</h2>
      <p>Mental health is not a destination—it's a journey. And journeys are always better when taken together. Our first event proved that when we create safe spaces for vulnerability, authentic connection, and mutual support, incredible healing becomes possible.</p>
      
      <p>Thank you to everyone who joined us for this milestone moment. Thank you for your courage, your openness, and your commitment to creating a world where mental health is prioritized and stigma is eliminated.</p>
      
      <p>This is just the beginning of something beautiful. Together, we're not just changing conversations about mental health—we're changing lives.</p>
      
      <p><em>With gratitude and excitement for what's ahead,<br>
      The OurSouls Team</em></p>
    `,
  },
}

const BlogPost = () => {
  const { slug } = useParams()
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-4">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Like
              </Button>
            </div>
          </header>

          <Card>
            <CardContent className="prose prose-lg max-w-none p-8">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-ul:text-gray-700 prose-strong:text-gray-900"
              />
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Card className="inline-block">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Need Professional Support?
                </h3>
                <p className="text-gray-600 mb-4">
                  Connect with our licensed therapists for personalized guidance
                </p>
                <Link to="/therapists">
                  <Button>Find a Therapist</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogPost
