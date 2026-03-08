import { redirect } from 'next/navigation'

export default function PrivacyPolicyRedirect({ params }) {
  redirect(`/${params.locale}/donnees-personnelles`)
}
