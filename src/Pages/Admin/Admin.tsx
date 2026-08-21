import {type FC, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Navigate} from "react-router-dom";

type AdminSection = 'Profile' | 'Projects' | 'Skills' | 'Services' | 'Upload Resume';

const sections: AdminSection[] = ['Profile', 'Projects', 'Skills', 'Services', 'Upload Resume'];

const sectionDescriptions: Record<AdminSection, string> = {
    Profile: 'Keep your professional details and social links up to date.',
    Projects: 'Add work you are proud to showcase in your portfolio.',
    Skills: 'List the tools and technologies you work with.',
    Services: 'Describe the services available to your clients.',
    'Upload Resume': 'Upload the latest version of your resume.',
};

const getTimeGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
};

const Admin: FC = () => {

    const {isAuthenticated, isLoading, logout, user} = useAuth0()
    const [activeSection, setActiveSection] = useState<AdminSection>('Profile')

    // Auth0 restores the user's session asynchronously after the OAuth callback.
    // Do not redirect until that check has completed, otherwise a valid user can
    // be sent back to /login while isAuthenticated is temporarily false.
    if (isLoading) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return(
        <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 px-5 py-6 text-white sm:px-8">
            <header className="grid w-full grid-cols-1 items-center gap-5 border-b border-white/25 pb-6 sm:grid-cols-[1fr_auto_1fr]">
                <div className="text-center sm:text-left">
                    <p className="mt-1 text-xl font-bold tracking-tight text-white [text-shadow:0_2px_5px_rgb(0_0_0_/_0.6)]">
                        {getTimeGreeting()}, {user?.given_name || user?.name || 'there'}
                    </p>
                </div>
                <nav
                    aria-label="Admin navigation"
                    className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6"
                >
                    {sections.map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => setActiveSection(item)}
                            aria-current={activeSection === item ? 'page' : undefined}
                            className={`relative py-2 text-sm font-semibold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black ${activeSection === item ? 'text-white after:w-full' : 'text-white/60 after:w-0 hover:text-white hover:after:w-full'}`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
                <button
                    type="button"
                    onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}
                    className="justify-self-center rounded-lg border border-white/30 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:justify-self-end"
                >
                    Logout
                </button>
            </header>

            <section className="mx-auto mt-10 w-full max-w-5xl py-8 sm:mt-14 sm:py-10" aria-labelledby="section-title">
                <div className="border-b border-white/15 pb-6">
                    <h1 id="section-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{activeSection}</h1>
                    <p className="mt-2 text-base leading-7 text-white/70">{sectionDescriptions[activeSection]}</p>
                </div>

                {activeSection === 'Profile' && (
                    <form className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        <Field label="Full name" name="name" placeholder="Your name" />
                        <Field label="Email address" name="email" type="email" placeholder="you@example.com" />
                        <Field label="Phone number" name="phone" type="tel" placeholder="+91 00000 00000" />
                        <Field label="Nationality" name="nationality" placeholder="Indian" />
                        <Field label="LinkedIn URL" name="linkedin" type="url" placeholder="https://linkedin.com/in/username" />
                        <Field label="GitHub URL" name="github" type="url" placeholder="https://github.com/username" />
                    </form>
                )}

                {activeSection === 'Projects' && (
                    <form className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        <Field label="Project name" name="projectName" placeholder="Project title" />
                        <Field label="Project image" name="projectImage" type="file" accept="image/*" />
                        <Field label="Live website URL" name="website" type="url" placeholder="https://yourproject.com" />
                        <Field label="GitHub URL" name="projectGithub" type="url" placeholder="https://github.com/username/project" />
                        <Field label="Tech stack" name="techStack" placeholder="React, TypeScript, Tailwind" />
                        <TextArea label="Description" name="description" placeholder="A short project description" className="sm:col-span-2 xl:col-span-3" />
                    </form>
                )}

                {activeSection === 'Skills' && (
                    <form className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        <Field label="Skill name" name="skillName" placeholder="e.g. TypeScript" />
                        <Field label="Skill icon" name="skillIcon" type="file" accept="image/*" />
                    </form>
                )}

                {activeSection === 'Services' && (
                    <form className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        <Field label="Service name" name="serviceName" placeholder="e.g. Web development" />
                        <Field label="Service image" name="serviceImage" type="file" accept="image/*" />
                        <TextArea label="Service description" name="serviceDescription" placeholder="Describe the service you provide" className="sm:col-span-2 xl:col-span-3" />
                    </form>
                )}

                {activeSection === 'Upload Resume' && (
                    <form className="mt-6">
                        <Field label="Resume file" name="resume" type="file" accept="application/pdf,.doc,.docx" />
                    </form>
                )}
            </section>
        </main>
    )
};

type FieldProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    accept?: string;
    className?: string;
};

const Field: FC<FieldProps> = ({label, name, type = 'text', placeholder, accept, className = ''}) => (
    <label className={`grid gap-2 text-sm font-semibold text-white/90 ${className}`}>
        {label}
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            accept={accept}
            className="w-full rounded-xl border border-white/35 bg-transparent px-4 py-3 text-base text-white outline-none transition placeholder:text-white/40 hover:border-white/60 focus:border-white focus:ring-4 focus:ring-white/15 file:mr-3 file:rounded-md file:border-0 file:bg-white file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-black"
        />
    </label>
);

const TextArea: FC<Omit<FieldProps, 'type' | 'accept'>> = ({label, name, placeholder, className = ''}) => (
    <label className={`grid gap-2 text-sm font-semibold text-white/90 ${className}`}>
        {label}
        <textarea
            name={name}
            placeholder={placeholder}
            rows={4}
            className="w-full resize-y rounded-xl border border-white/35 bg-transparent px-4 py-3 text-base text-white outline-none transition placeholder:text-white/40 hover:border-white/60 focus:border-white focus:ring-4 focus:ring-white/15"
        />
    </label>
);

export default Admin;
