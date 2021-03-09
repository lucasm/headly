import { useRouter } from 'next/router';

export default function SelectLocale(props) {

    const router = useRouter();
    const { locale } = router;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <form>
            <label>{props.edition}</label>
            <select onChange={changeLanguage} defaultValue={locale}>
                <option value="en">International</option>
                <option value="pt-BR">Brasil</option>
                <option value="pt-PT">Portugal</option>
            </select>
        </form>
    )
}