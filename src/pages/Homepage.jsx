import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      {/* Hero Section */}
      <div className="hero bg-cover bg-center py-20" style={{ backgroundImage: "url('https://assets.pokemon.com/assets/cms2/img/misc/virtual-backgrounds/masters/pokemon-masters-4.jpg')" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Pokémon World</h1>
            <p className="mb-5">
              Discover the world of Pokémon. Find your favorite Pokémon, explore their abilities, and become a Pokémon Master.
            </p>
            <Link to="/pokemon" className="btn btn-primary">Explore Pokémon</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://img.pokemondb.net/artwork/large/pikachu.jpg" alt="Pikachu" className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Pokédex</h2>
              <p>Search for detailed information on any Pokémon in our extensive Pokédex.</p>
              <div className="card-actions justify-center">
                <Link to="/pokemon" className="btn btn-secondary">View Pokédex</Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://img.pokemondb.net/artwork/large/charizard.jpg" alt="Charizard" className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Training Tips</h2>
              <p>Learn the best tips and tricks to train your Pokémon and become the ultimate Pokémon Master.</p>
              <div className="card-actions justify-center">
                <Link to="/training" className="btn btn-secondary">Get Tips</Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://img.pokemondb.net/artwork/large/mewtwo.jpg" alt="Mewtwo" className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Battle Strategies</h2>
              <p>Explore advanced battle strategies to defeat the toughest opponents in Pokémon battles.</p>
              <div className="card-actions justify-center">
                <Link to="/battles" className="btn btn-secondary">Learn Strategies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
