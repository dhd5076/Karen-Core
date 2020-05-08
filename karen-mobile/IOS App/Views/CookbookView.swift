//
//  CookbookViewer.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/7/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI

struct CookbookView: View {
    @State public var showingRecipeEditor = false
    
    var body: some View {
        List {
            Section(header: Text("Breakfast")) {
                NavigationLink(destination: RecipeView()) {
                    Text("French Toast")
                }
            }
            Section(header: Text("Lunch")) {
                NavigationLink(destination: RecipeView()) {
                    Text("Ham and Cheese Sandwhich")
                }
            }
            Section(header: Text("Dinner")) {
                NavigationLink(destination: RecipeView()) {
                    Text("Gochujang Chicken Lollipops")
                }
            }
            Section(header: Text("Snacks")) {
                NavigationLink(destination: RecipeView()) {
                    Text("Ants On A Log")
                }
            }
            Section(header: Text("Desert")) {
                NavigationLink(destination: RecipeView()) {
                    Text("Baklava")
                }
            }
        }
        .navigationBarTitle("Cookbook")
        .navigationBarItems(trailing:
            Button(action: {
                self.showingRecipeEditor = true
            }) {
                Image(systemName: "plus")
            }
        )
        .listStyle(GroupedListStyle())
        .sheet(isPresented: $showingRecipeEditor) {
            EditRecipe()
        }
    }
}

struct EditRecipe : View {
    var body : some View {
        Text("Get Fucked")
    }
}

struct CookbookView_Previews: PreviewProvider {
    static var previews: some View {
        CookbookView()
    }
}
