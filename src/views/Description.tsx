import { FingerPrintIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'ආගම පිළිබඳ යුතුකම',
        description:
            'තම ආගමෙහි ඇති ආධ්‍යාත්මික ධර්මතාවයන්ට අනුකූලව හා එයට පක්ෂපාතීව දිවිපෙවෙත සාදා ගැනීම.',
        icon: FingerPrintIcon,
    },
    {
        name: 'අන් අය කෙරෙහි යුතුකම',
        description:
            'ප්‍රාදේශීය, දේශිය සහ ජාත්‍යන්තර සංහිඳියාව හරහා තම රටට පක්ෂපාතී වීම හා ජගත් සහයෝගීතාවය සහ මනුෂ්‍යත්වය මුලකොටගෙන සමාජ අභිමනය හා ගරුත්වය පදනම් කර ගත් සමාජ සංවර්ධන වැඩ සඳහා සහභාගී වීම.',
        icon: FingerPrintIcon,
    },
    {
        name: 'තමා පිළිබඳ යුතුකම',
        description:
            'තමාගේ අභිවෘද්ධිය සඳහා ඇති යුතුකම.',
        icon: FingerPrintIcon,
    },
]

const Description = () => {
    return (
        <div className="bg-white pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        බාලදක්ෂ ව්‍යාපාරය
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        බාලදක්ෂ ව්‍යාපාරය යනු එහි නිර්මාතෘ වරයා විසින් හඳුනාගත් අරමුණු, සිද්ධාන්තයන් සහ ක්‍රමවේදයන්ගෙන් සමන්විත කිසිඳු භේදයකින් තොරව ළමා හා තරුණයන්ගේ අධ්‍යපනය සඳහා සැකසුනු, සැමට විවෘත්ත වූ හා දේශපාලනයකින් තොර වූ ස්වෙච්ඡා සංවිධානයකි.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl lg:text-center mt-16">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        බාලදක්ෂ මෙහෙවර ප්‍රකාශය
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        ස්වයං පරිසමාප්ත පුද්ගලයින් වශයෙන් සමාජයට ඵලදායී කාර්යභාරයක් ඉටුකරමින් වඩාත් යහපත් ලොවක් ගොඩනැඟීම සඳහා සහය වීමට, බාලදක්ෂ නීතිය හා පොරොන්දුව මත පදනම් වූ පිළිගත් අගයන් මඟින් ළමා හා යොවුන් අධ්‍යාපනයට දායක වීම බාලදක්ෂ ව්‍යාපාරයේ මෙහෙවරයි.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl lg:text-center mt-16">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        බාලදක්ෂ ව්‍යාපාරයේ අරමුණු
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        බාලදක්ෂ ව්‍යාපාරයේ මූලික අරමුණු වන්නේ ළමා සහ තරුණ පරපුර ශාරීරික, බුද්ධිමය, සංවේදී, සමාජයීය, ැධ්‍යාත්මික හා සංස්කෘතික හැකියාවන් වර්ධනය කිරීම තුලින් ප්‍රාදේශීය, ජාතික සහ ජාත්‍යන්තර ප්‍රජාවට වැඩදායී වූ වගකිය හැකි යහපත් පුරවැසියෙකු බිහි කිරීමයි.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl lg:text-center mt-16">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        බාලදක්ෂ ව්‍යාපාරයේ මූලධර්ම
                    </p>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-16">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">නීතිය හා පොරොන්දුව</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ක්‍රියාවෙන් අවබෝධය</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">කාණ්ඩ ක්‍රමය</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">සංකේතාත්මක රාමුව</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">එළිමහන් ජීවිතය</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">වැඩැහිටි නායකත්වය</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">පෞද්ගලික ප්‍රගතිය</h3>
                        </li>
                    </ol>
                </div>

                <div className="mx-auto max-w-2xl lg:text-center mt-16">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        බාලදක්ෂ ව්‍යාපාරයේ අරමුණු
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mx-auto max-w-2xl lg:text-center mt-16">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        බාලදක්ෂ ප්‍රගති පදක්කම් මාර්ගය
                    </p>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-16">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ජාතික බාලදක්ෂ සාමාජික පදක්කම</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">බාලදක්ෂ ආචාර්යවරයාගේ ප්‍රදානය</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">සමූහ බාලදක්ෂ ආචාර්යවරයාගේ ප්‍රදානය</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">දිසා කොමසාරිස් ප්‍රදානය</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ප්‍රධාන කොමසාරිස් අභියෝගතා ප්‍රදානය (අනිවාර්ය නොවේ)</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">වනවාසිකයාගේ ප්‍රදානය</h3>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ජනාධිපති බාලදක්ෂ ප්‍රදානය</h3>
                        </li>
                    </ol>
                </div>

            </div>
        </div>
    )
}

export default Description