import { NextResponse } from 'next/server'
const middleware = (request) => {
 return NextResponse.redirect(new URL('/login',request.url))
}
export const config = {
    matcher:["/studentlist:path*"]
}
export default middleware




