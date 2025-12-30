
import Action from "./../Buttons/Action"
// import thumbHero from "/assets/Pages/yellow/thumb-call-to-action.jpg"
const CallToAction = () => {
    return (
        <div className="">
            <Action
                id={'callToAction'}
                title={'Seja um Afiliado'}
                href={'/seja-afiliado'}
                data={[]}
                style={'h-screen  '}
                buttonStyle={'shadow-lg hover:shadow-violet-600/50 bg-violet-600 text-white font-bold lg:text-lg lg:px-8 md:px-6 sm:px-3 py-3 rounded-xl hover:transition hover:text-yellow-400'}
                bgImage={thumbHero}
            />
        </div>
    )
}

export default CallToAction
