import { redirect } from 'next/navigation'

export default function LegalNoticeRedirect({ params }) {
  redirect(`/${params.locale}/mentions-legales`)
}
