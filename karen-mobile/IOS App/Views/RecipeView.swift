//
//  RecipeView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/7/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI
import URLImage

struct RecipeView: View {
    var body: some View {
        VStack {
            URLImage(URL(string: "https://via.placeholder.com/350x200")!)
                .frame(maxWidth: .infinity)
            ScrollView {
                VStack(spacing: 12) {
                    HStack {
                        Text("Ingredients")
                            .font(.title)
                        Spacer()
                    }
                    HStack {
                        Text("1 Egg")
                        Spacer()
                    }
                    HStack {
                        Text("1 Tsp Cinnamon")
                        Spacer()
                    }
                    HStack {
                        Text("1 Slice Bread")
                        Spacer()
                    }
                    HStack {
                        Text("1 Tsp Salt")
                        Spacer()
                    }
                    Spacer()
                    HStack {
                        Text("Instructions")
                            .font(.title)
                        Spacer()
                    }
                    HStack {
                        Text("1. This is step one ")
                        Spacer()
                    }
                    HStack {
                        Text("2. This is step two ")
                        Spacer()
                    }
                    HStack {
                        Text("3. This is step three ")
                        Spacer()
                    }
                }
                .padding(.leading, 12)
            }
        }
        .navigationBarTitle("French Toast")
    }
}

struct RecipeView_Previews: PreviewProvider {
    static var previews: some View {
        RecipeView()
    }
}
