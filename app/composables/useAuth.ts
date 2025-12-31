export const useAuth = () => {
  const { $supabase } = useNuxtApp()
  const user = useState<any>('user', () => null)

  const register = async (email: string, password: string, name: string) => {
    const { data, error } = await $supabase.auth.signUp({
        email,
        password
    })

    if (error) throw error
    if (!data.user) throw new Error('Register failed')

    const { error: profileError } = await $supabase
        .from('profiles')
        .insert({
        id: data.user.id,
        name
        })

    if (profileError) throw profileError

    user.value = data.user
    }


  const login = async (email: string, password: string) => {
    const { data, error } = await $supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
    user.value = data.user
  }

  return { user, login, register }
}
