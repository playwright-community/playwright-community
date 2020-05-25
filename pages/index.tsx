import Nav from '../components/nav'
import MainLayout from '../layouts/main'

export default function IndexPage() {
  return (
    <MainLayout>
      <>
        <header className="w-full container mx-auto px-3">
          <div className="flex flex-col items-center py-12">
            <span className="font-bold text-gray-800 hover:text-gray-700 text-5xl">
              Playwright Community
            </span>
            <p className="text-lg text-gray-600">
              A central home for tutorials, tooling and projects in the Playwright ecosystem.
            </p>
          </div>
        </header>

        <div className="container mx-auto flex flex-wrap py-2">
          <section className="w-full flex flex-col items-center px-3">
            <article className="flex flex-col shadow my-4">
              <div className="bg-white flex flex-col justify-start p-6">
                <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                <a href="#" className="text-sm pb-3">
                  By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </a>
                <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
              </div>
            </article>

            <article className="flex flex-col shadow my-4">
              <div className="bg-white flex flex-col justify-start p-6">
                <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Automotive, Finance</a>
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                <a href="#" className="text-sm pb-3">
                  By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on January 12th, 2020
                    </a>
                <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
              </div>
            </article>

            <article className="flex flex-col shadow my-4">
              <div className="bg-white flex flex-col justify-start p-6">
                <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                <a href="#" className="text-sm pb-3">
                  By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
                    </a>
                <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
              </div>
            </article>
          </section>
        </div>
      </>
    </MainLayout>
  )
}
